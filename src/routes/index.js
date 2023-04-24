const express = require('express');

const { router: recepcionesDocumentoRouter } = require('./recepcionDocumentos.router');
const { router: generalRouter } = require('./general.router');
const { router: usuariosRouter } = require('./usuarios.router');
const { router: deltaRouter } = require('./delta.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router);
  router.use('/recepciones_documento', recepcionesDocumentoRouter);
  router.use('/general', generalRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/delta', deltaRouter);
}

module.exports = { routerApi };
