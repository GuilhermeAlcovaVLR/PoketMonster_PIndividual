/*
  Roteamento para endpoints relacionados a resultados do quiz.
  Define rotas HTTP e delega para o controller correspondente.

  Arquivo: src/routes/resultados.js
*/

var express = require('express');
var router = express.Router();

// Importa o controller que contém a lógica das rotas
var resultadoController = require('../controllers/resultadoController');

// POST /resultados
// Rota para salvar um resultado de quiz enviado pelo frontend.
// Espera um JSON no corpo com os dados do resultado (ver README / doc gerado).
router.post('/', resultadoController.salvarResultado);

// GET /resultados/percentual
// Retorna soma/percentual de acertos x erros (para o donut)
router.get('/percentual/:usuarioId', resultadoController.getPercentualAcertos);

// GET /resultados/por-regiao
// Retorna acertos agregados por região (para o radar)
router.get('/por-regiao/:usuarioId', resultadoController.getAcertosPorRegiao);

// GET /resultados/hall
// Retorna lista de tentativas que gabaritaram (nome, momento, tempo)
router.get('/hall', resultadoController.getHallDaFama);

// GET /resultados/kpis/:usuarioId
// Retorna KPIs para um usuário (total acertos, média de tempo, posição/ranking)
router.get('/kpis/:usuarioId', resultadoController.getKpisPorUsuario);

module.exports = router;
