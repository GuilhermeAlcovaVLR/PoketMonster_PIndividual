var resultadoModel = require('../models/resultadoModel');

async function salvarResultado(req, res) {
    try {
        var dados = req.body;

        // Aceita tanto "acertos" quanto "pontuacao" para evitar quebra com o front-end
        var acertosRaw = dados.acertos !== undefined ? dados.acertos : dados.pontuacao;

        if (!dados || !dados.fk_usuario || acertosRaw === undefined || dados.tempo_segundos === undefined) {
            return res.status(400).json({ error: 'Payload inválido. Envie fk_usuario, acertos e tempo_segundos.' });
        }

        var fk_usuario = parseInt(dados.fk_usuario);
        var acertos = parseInt(acertosRaw);
        var tempo_segundos = parseInt(dados.tempo_segundos);

        if (isNaN(fk_usuario) || isNaN(acertos) || isNaN(tempo_segundos)) {
            return res.status(400).json({ error: 'Os campos numéricos devem ser inteiros válidos.' });
        }

        if (acertos < 0 || acertos > 30) {
            return res.status(400).json({ error: 'A quantidade de acertos deve estar entre 0 e 30.' });
        }

        var regiao = dados.acertos_por_regiao || {};

        const resultadoInsercao = await resultadoModel.inserir({
            fk_usuario: fk_usuario,
            acertos: acertos,
            tempo_segundos: tempo_segundos,
            acertos_kanto: parseInt(regiao.Kanto || 0),
            acertos_johto: parseInt(regiao.Johto || 0),
            acertos_hoenn: parseInt(regiao.Hoenn || 0),
            acertos_sinnoh: parseInt(regiao.Sinnoh || 0),
            acertos_unova: parseInt(regiao.Unova || 0),
            acertos_kalos: parseInt(regiao.Kalos || 0)
        });

        return res.status(201).json({ id: resultadoInsercao.insertId, message: 'Resultado salvo com sucesso' });
    } catch (err) {
        console.error('Erro ao salvar resultado:', err);
        return res.status(500).json({ error: 'Erro interno ao salvar resultado.' });
    }
}

async function getPercentualAcertos(req, res) {
    try {
        const dados = await resultadoModel.totalAcertosErradas();
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar percentual:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar percentual.' });
    }
}

async function getAcertosPorRegiao(req, res) {
    try {
        const dados = await resultadoModel.acertosPorRegiao();
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar acertos por regiao:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar acertos por regiao.' });
    }
}

async function getHallDaFama(req, res) {
    try {
        const limit = parseInt(req.query.limit) || 50;
        const dados = await resultadoModel.hallDaFama(limit);
        return res.status(200).json(dados);
    } catch (err) {
        console.error('Erro ao buscar hall da fama:', err);
        return res.status(500).json({ error: 'Erro interno ao buscar hall da fama.' });
    }
}

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
