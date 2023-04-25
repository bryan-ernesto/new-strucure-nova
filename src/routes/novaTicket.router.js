const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/get_ticket_all', async (req, res) => {
  try {
    const {
      stringNombreReferencia,
      intIdPrioridad,
      intEstadoResolucion,
      intIdProceso,
      intIdCatTipo,
      intIdCatCanal,
      intIdCatEquipo,
      intIdCatSeguimiento,
      intIdCatResponsable,
      intIdCatSolicitante,
      intIdCatCreadoPor,
      dateAsignacionInicio,
      dateAsignacionFin,
      dateResolucionInicio,
      dateResolucionFin,
      dateUltimaVistaInicio,
      dateUltimaVistaFin,
      dateVencimientoInicio,
      dateVencimientoFin,
      datePrimeraRespuestaInicio,
      datePrimeraRespuestaFin,
      dateCreacionInicio,
      dateCreacionFin,
      dateActualizacionInicio,
      dateActualizacionFin,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_ticket_all($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)', [stringNombreReferencia, intIdPrioridad, intEstadoResolucion, intIdProceso, intIdCatTipo, intIdCatCanal, intIdCatEquipo, intIdCatSeguimiento, intIdCatResponsable, intIdCatSolicitante, intIdCatCreadoPor, dateAsignacionInicio, dateAsignacionFin, dateResolucionInicio, dateResolucionFin, dateUltimaVistaInicio, dateUltimaVistaFin, dateVencimientoInicio, dateVencimientoFin, datePrimeraRespuestaInicio, datePrimeraRespuestaFin, dateCreacionInicio, dateCreacionFin, dateActualizacionInicio, dateActualizacionFin]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_ticket_por_usuario', async (req, res) => {
  // Get_ticket_por_usuario
  try {
    const {
      intIdCatTipo,
      intCreadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_referencia_ticket_creado($1,$2);', [intIdCatTipo, intCreadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
