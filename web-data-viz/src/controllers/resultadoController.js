/*
  Controller para resultados do quiz.
  Contém funções que recebem a requisição HTTP, fazem validações simples,
  chamam o model para executar queries e retornam respostas JSON.

  Comentários práticos dentro de cada função explicam o propósito.
*/

var resultadoModel = require('../models/resultadoModel');

// Salva um resultado enviado pelo frontend
async function salvarResultado(req, res) {
    try {
        // O payload esperado (exemplo):
        // {
        //   fk_usuario: 123,
        //   pontuacao: 18,
        //   erradas: 2,
        //   tempo_segundos: 75,
        //   total_questoes: 20,
        //   acertos_por_regiao: { Kanto:5, Johto:3, ... }
        // }

        var dados = req.body;

        // Validações básicas — protege contra dados inesperados
        if (!dados || !dados.fk_usuario || typeof dados.pontuacao === 'undefined' || typeof dados.total_questoes === 'undefined') {
            return res.status(400).json({ error: 'Payload inválido. Verifique fk_usuario, pontuacao e total_questoes.' });
        }

        // coerção de inteiros
        dados.fk_usuario = parseInt(dados.fk_usuario);
        dados.acertos = parseInt(dados.acertos);
        dados.tempo_segundos = parseInt(dados.tempo_segundos || 0);
        dados.total_questoes = parseInt(dados.total_questoes);
        dados.acertos = parseInt(dados.acertos);


        // regra simples: pontuacao + erradas não pode exceder total_questoes
        if (dados.acertos > 30) {
            return res.status(400).json({ error: 'Acertos maior que total_questoes.' });
        }

        
        // Extrai acertos por região se informado
    //    var regiao = dados.acertos_por_regiao || {};

        /*// Chama o model para inserir no banco
        const resultadoInsercao = await resultadoModel.inserir({
            fk_usuario: dados.fk_usuario,
            pontuacao: dados.pontuacao,
            tempo_segundos: dados.tempo_segundos,
            total_questoes: dados.total_questoes,
            acertos_kanto: parseInt(regiao.Kanto || 0),
            acertos_johto: parseInt(regiao.Johto || 0),
            acertos_hoenn: parseInt(regiao.Hoenn || 0),
            acertos_sinnoh: parseInt(regiao.Sinnoh || 0),
            acertos_unova: parseInt(regiao.Unova || 0),
            acertos_kalos: parseInt(regiao.Kalos || 0)
        });*/

        // Retorna 201 com o id criado
        return res.status(201).json({ id: resultadoInsercao.insertId, message: 'resultado salvo' });
    } catch (err) {
        console.error('Erro ao salvar resultado:', err);
        return res.status(500).json({ error: 'Erro interno ao salvar resultado.' });
    }
}

// Retorna acertos x erradas agregados (para donut)
async function getPercentualAcertos(req, res) {
    try {
        const dados = await resultadoModel.totalAcertosErradas();
        // O model retorna { total_acertos, total_erradas }
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar percentual:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar percentual.' });
    }
}

// Retorna acertos por região agregados (para radar)
async function getAcertosPorRegiao(req, res) {
    try {
        const dados = await resultadoModel.acertosPorRegiao();
        // model retorna objeto com chaves por região
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar acertos por regiao:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar acertos por regiao.' });
    }
}

// Retorna o hall da fama (usuários que gabaritaram)
async function getHallDaFama(req, res) {
    try {
        // opcional: aceitar ?limit= em query
        const limit = parseInt(req.query.limit) || 50;
        const dados = await resultadoModel.hallDaFama(limit);
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar hall da fama:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar hall da fama.' });
    }
}

// Retorna KPIs para um usuário
async function getKpisPorUsuario(req, res) {
    try {
        const usuarioId = parseInt(req.params.usuarioId);
        if (!usuarioId) return res.status(400).json({ error: 'usuarioId inválido.' });

        const kpis = await resultadoModel.kpisPorUsuario(usuarioId);
        return res.status(200).json(kpis);
    } catch (err) {
        console.error('Erro ao buscar KPIs:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar KPIs.' });
    }
}

module.exports = {
    salvarResultado,
    getPercentualAcertos,
    getAcertosPorRegiao,
    getHallDaFama,
    getKpisPorUsuario
};
