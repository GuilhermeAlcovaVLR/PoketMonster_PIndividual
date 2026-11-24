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
    // Monta instrução SQL usando interpolação simples para seguir estilo do projeto.
    // Em produção, recomenda-se usar queries parametrizadas para evitar SQL injection.
    var instrucaoSql = `
        INSERT INTO resultado (
            fk_usuario, acertos,data_resultado, tempo_segundos) VALUES (
            ${dados.fk_usuario}, ${dados.acertos}, ${dados.data_resultado}, ${dados.tempo_segundos}
        );
          INSERT INTO resultado_regiao (
            fk_resultado, fk_regiao, acertos_regiao) VALUES (
            ${dados.fk_resultado}, ${dados.fk_regiao}, ${dados.acertos_regiao}
        );
    `;

    console.log('Executando SQL (inserir resultado):', instrucaoSql);
    return database.executar(instrucaoSql);
}

// Soma total de acertos e erradas — para o donut
function totalAcertosErradas() {
    var instrucaoSql = `
        SELECT
            acertos AS total_acertos,
            (30 - COALESCE(acertos, 0)) AS total_erradas
        FROM resultado;
    `;
    console.log('Executando SQL (totalAcertosErradas):', instrucaoSql);
    return database.executar(instrucaoSql).then(function (result) {
        // database.executar retorna um array de rows; pegamos a primeira linha
        return result[0] || { total_acertos: 0, total_erradas: 0 };
    });
}

// Agregado de acertos por região — para radar
function acertosPorRegiao() {
    var instrucaoSql = `
        SELECT
            r.nome, 
            rg.acertos_regiao
        FROM resultado_regiao rg
        JOIN regiao r 
        ON r.id = rg.fk_regiao;
    `;
    console.log('Executando SQL (acertosPorRegiao):', instrucaoSql);
    return database.executar(instrucaoSql).then(function (result) {
        return result[0] || { Kanto: 0, Johto: 0, Hoenn: 0, Sinnoh: 0, Unova: 0, Kalos: 0 };
    });
}

// Hall da fama: registros que gabaritaram (pontuacao = total_questoes)
function hallDaFama(limit) {
    var instrucaoSql = `
        SELECT 
            u.id AS 'ID', 
            u.nome AS 'TREINADOR',     
            r.tempo_segundos 'TEMPO', 
            r.data_resultado 'DATA'
        FROM usuario u
        JOIN resultado r
        ON u.id = r.fk_usuario
        WHERE r.acertos = 30
        ORDER BY tempo_segundos
        LIMIT ${limit};`
        ;
    console.log('Executando SQL (hallDaFama):', instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPIs para um usuário: total de acertos, média de tempo por tentativa, posição (ranking)
function kpisPorUsuario(usuarioId) {
    // total de acertos
    var sqlTotalAcertos = `SELECT acertos AS total_acertos FROM resultado WHERE fk_usuario = ${usuarioId}`;

    // média de tempo
    var sqlMediaTempo = `SELECT tempo_segundos AS media_tempo FROM resultado WHERE fk_usuario = ${usuarioId}`;

    // posição por soma de pontos (1 = maior soma)
    var sqlClasse = `
    SELECT 
	CASE
		WHEN acertos = 30 THEN 'Mestre Pokémon'
		WHEN acertos >= 25 THEN 'Campeão'
		WHEN acertos >= 20 THEN 'Elite dos Quatro'
		WHEN acertos >= 15 THEN 'Líder de ginásio'
		WHEN acertos >= 10 THEN 'Comum'
		ELSE 'Iniciante'
	END AS 'classe'
    FROM resultado WHERE fk_usuario = ${usuarioId};`
    ;

    console.log('Executando SQLs (kpisPorUsuario)');

    // Executa as três queries em sequência (poderia paralelizar)
    return database.executar(sqlTotalAcertos).then(function (r1) {
        return database.executar(sqlMediaTempo).then(function (r2) {
            return database.executar(sqlClasse).then(function (r3) {
                return {
                    total_acertos: (r1[0] && r1[0].total_acertos) || 0,
                    media_tempo_segundos: (r2[0] && r2[0].media_tempo) || 0,
                    posicao: (r3[0] && r3[0].posicao) || 0
                };
            });
        });
    });
}

module.exports = {
    inserir,
    totalAcertosErradas,
    acertosPorRegiao,
    hallDaFama,
    kpisPorUsuario
};
