const express = require('express');

const { router: recepcionesDocumentoRouter } = require('./recepcionDocumentos.router');
const { router: generalRouter } = require('./general.router');
const { router: usuariosRouter } = require('./usuarios.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/', router);
  router.use('/recepciones_documento', recepcionesDocumentoRouter);
  router.use('/general', generalRouter);
  router.use('/usuarios', usuariosRouter);
}

module.exports = { routerApi };
