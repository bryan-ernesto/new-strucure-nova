const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Get_Documento_Moneda', async (req, res) => {
  try {
    const {
      strSimbolo,
      strNombre,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.get_documento_moneda($1,$2)', [strSimbolo, strNombre]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Pais', async (req, res) => {
  try {
    const {
      strNombre,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.get_documento_pais($1)', [strNombre]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
