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
function totalAcertosErradas() {
    var resultadoSql = `
        SELECT
            acertos AS total_acertos,
            (30 - COALESCE(acertos, 0)) AS total_erradas
        FROM resultado;
    `;
    console.log('Executando SQL (totalAcertosErradas):', resultadoSql);
    return database.executar(resultadoSql).then(function (result) {
        // database.executar retorna um array de rows; pegamos a primeira linha
        return result[0] || { total_acertos: 0, total_erradas: 0 };
    });
}

// Agregado de acertos por região — para radar
function acertosPorRegiao() {
    var resultadoSql = `
        SELECT
            r.nome, 
            rg.acertos_regiao
        FROM resultado_regiao rg
        JOIN regiao r 
        ON r.id = rg.fk_regiao;
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
            COALESCE(SUM(acertos), 0) AS total_acertos,
            COALESCE(ROUND(AVG(tempo_segundos)), 0) AS media_tempo_segundos,
            CASE
                WHEN MAX(acertos) = 30 THEN 'Mestre Pokémon'
                WHEN MAX(acertos) >= 25 THEN 'Campeão'
                WHEN MAX(acertos) >= 20 THEN 'Elite dos Quatro'
                WHEN MAX(acertos) >= 15 THEN 'Líder de ginásio'
                WHEN MAX(acertos) >= 10 THEN 'Comum'
                ELSE 'Iniciante'
            END AS classe
        FROM resultado
        WHERE fk_usuario = ${usuarioId};
    `;

    console.log('Executando SQL (kpisPorUsuario):', instrucaoSql);

    return database.executar(instrucaoSql).then(function (result) {
        return result[0] || {
            total_acertos: 0,
            media_tempo_segundos: 0,
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
