const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/get_all_apps', async (req, res) => {
  try {
    const {
      intCatAplicacion,
      strNombre,
      intEstado,
      intCreadoPor,
      intModificadoPor,
      strFechaCreacionI,
      strFechaActualizacionF,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_aplicacion.get_aplicacion_all($1,$2,$3,$4,$5,$6,$7);', [intCatAplicacion, strNombre, intEstado, intCreadoPor, intModificadoPor, strFechaCreacionI, strFechaActualizacionF]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
