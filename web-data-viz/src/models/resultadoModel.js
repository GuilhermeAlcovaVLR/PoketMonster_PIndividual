/*
  Model com queries SQL relacionadas aos resultados do quiz.
  Implementa funções que retornam Promises (assícronas) compatíveis
  com o padrão usado no projeto (database.executar).

  OBS: Este model assume que existe uma conexão exportada em
  src/database/config.js com função `executar(sql)` usada em outros models.
*/

var database = require('../database/config');

// Inserir um resultado no banco.
// Recebe um objeto com campos já preparados (números).
function inserir(dados) {
    // 1. Insere o resultado principal (data_resultado usa DEFAULT CURRENT_TIMESTAMP)
    var sqlResultado = `
        INSERT INTO resultado (fk_usuario, acertos, tempo_segundos)
        VALUES (${dados.fk_usuario}, ${dados.acertos}, ${dados.tempo_segundos});
    `;

    console.log('Executando SQL (inserir resultado):', sqlResultado);

    return database.executar(sqlResultado).then(function (resultado) {
        var fkResultado = resultado.insertId;

        // 2. Insere as 6 regiões vinculadas ao ID recém-criado (IDs 1 a 6 conforme tabela regiao)
        var sqlRegioes = `
            INSERT INTO resultado_regiao (fk_resultado, fk_regiao, acertos_regiao) VALUES
            (${fkResultado}, 1, ${dados.acertos_kanto}),
            (${fkResultado}, 2, ${dados.acertos_johto}),
            (${fkResultado}, 3, ${dados.acertos_hoenn}),
            (${fkResultado}, 4, ${dados.acertos_sinnoh}),
            (${fkResultado}, 5, ${dados.acertos_unova}),
            (${fkResultado}, 6, ${dados.acertos_kalos});
        `;

        console.log('Executando SQL (inserir resultado_regiao):', sqlRegioes);

        return database.executar(sqlRegioes).then(function () {
            return resultado;
        });
    });
}

// Soma total de acertos e erradas — para o donut
function totalAcertosErradas(usuarioId) {
    var resultadoSql = `       
        SELECT
            /* ALTERADO: removido SUM() para pegar os acertos individuais de uma única tentativa */
            acertos AS total_acertos,
            /* ALTERADO: removido SUM() para calcular os erros apenas daquela tentativa (30 - acertos) */
            (30 - acertos) AS total_erradas
        FROM resultado
        /* ADICIONADO: filtra somente as tentativas do usuário logado */
        WHERE fk_usuario = ${usuarioId}
        /* ADICIONADO: ordena do registro mais recente (maior ID) para o mais antigo */
        ORDER BY id DESC
        /* ADICIONADO: pega apenas a última tentativa realizada */
        LIMIT 1;
    `;
    console.log('Executando SQL (totalAcertosErradas):', resultadoSql);
    return database.executar(resultadoSql).then(function (result) {
        // database.executar retorna um array de rows; pegamos a primeira linha
        return result[0] || { total_acertos: 0, total_erradas: 0 };
    });
}

// Agregado de acertos por região — para radar
function acertosPorRegiao(usuarioId) {
    var resultadoSql = `
        SELECT
            r.nome,
            /* ALTERADO: removido SUM() e GROUP BY para pegar a pontuação individual da última partida */
            COALESCE(rg.acertos_regiao, 0) AS total
        FROM regiao r
        LEFT JOIN resultado_regiao rg
            ON r.id = rg.fk_regiao
            /* ADICIONADO: vincula o JOIN exclusivamente ao ID da última tentativa do usuário */
            AND rg.fk_resultado = (
                /* ADICIONADO (subquery): busca o ID da tentativa mais recente do usuário */
                SELECT id
                /* ADICIONADO (subquery): consulta a tabela de resultados */
                FROM resultado
                /* ADICIONADO (subquery): filtra pelo usuário logado */
                WHERE fk_usuario = ${usuarioId}
                /* ADICIONADO (subquery): ordena da tentativa mais nova para a mais antiga */
                ORDER BY id DESC
                /* ADICIONADO (subquery): limita ao último ID gerado */
                LIMIT 1
            /* ADICIONADO: fecha a subquery do filtro de resultado */
            )
        ORDER BY r.id;
    `;
    console.log('Executando SQL (acertosPorRegiao):', resultadoSql);
    return database.executar(resultadoSql).then(function (result) {
        var consolidado = { Kanto: 0, Johto: 0, Hoenn: 0, Sinnoh: 0, Unova: 0, Kalos: 0 };
        for (var i = 0; i < result.length; i++) {
            consolidado[result[i].nome] = Number(result[i].total);
        }
        return consolidado;
    });
}

// Hall da fama: registros que gabaritaram (acertos = total_questoes)
function hallDaFama(limit) {
    var resultadoSql = `
        SELECT 
            u.id AS 'ID', 
            u.nome AS 'TREINADOR',     
            r.tempo_segundos 'TEMPO', 
            r.data_resultado 'DATA'
        FROM usuario u
        JOIN resultado r
            ON u.id = r.fk_usuario
        WHERE r.acertos = 30
        ORDER BY tempo_segundos ASC
        LIMIT ${limit};`
        ;
    console.log('Executando SQL (hallDaFama):', resultadoSql);
    return database.executar(resultadoSql);
}

// KPIs para um usuário: total de acertos, média de tempo por tentativa, posição (ranking)
function kpisPorUsuario(usuarioId) {
    var instrucaoSql = `
       SELECT 
            /* ALTERADO: removido SUM() e renomeado de "total_acertos" para "acertos" (da última partida) */
            acertos,
            /* ALTERADO: removido ROUND(AVG()) e renomeado de "media_tempo_segundos" para "tempo_segundos" */
            tempo_segundos,
            CASE
                /* ALTERADO: substituído MAX(acertos) por "acertos" da tentativa atual */
                WHEN acertos = 30 THEN 'Mestre Pokémon'
                /* ALTERADO: substituído MAX(acertos) por "acertos" */
                WHEN acertos >= 25 THEN 'Campeão'
                /* ALTERADO: substituído MAX(acertos) por "acertos" */
                WHEN acertos >= 20 THEN 'Elite dos Quatro'
                /* ALTERADO: substituído MAX(acertos) por "acertos" */
                WHEN acertos >= 15 THEN 'Líder de ginásio'
                /* ALTERADO: substituído MAX(acertos) por "acertos" */
                WHEN acertos >= 10 THEN 'Comum'
                ELSE 'Iniciante'
            END AS classe
        FROM resultado
        WHERE fk_usuario = ${usuarioId}
        /* ADICIONADO: ordena da tentativa mais recente para a mais antiga */
        ORDER BY id DESC
        /* ADICIONADO: retorna apenas o registro da última tentativa */
        LIMIT 1;
    `;

    console.log('Executando SQL (kpisPorUsuario):', instrucaoSql);

    return database.executar(instrucaoSql).then(function (result) {
        return result[0] || {
            acertos: 0,
            tempo_segundos: 0,
            classe: 'Iniciante'
        };
    });
}

module.exports = {
    inserir,
    totalAcertosErradas,
    acertosPorRegiao,
    hallDaFama,
    kpisPorUsuario
};
