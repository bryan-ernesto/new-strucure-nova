const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Get_Documento_Canal', async (req, res) => {
  try {
    const {
      strNombre,
      strDescripcion,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_canal($1,$2)', [strNombre, strDescripcion]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_DetalleFacturaSat', async (req, res) => {
  try {
    const {
      strEmpresa,
      intDte,
      intNit,
      strProveedor,
      numericMonto,
      intIdMoneda,
      strDescripcion,
      intIdPais,
      intEstado,
      intCantidad,
      intCuentaContableSugerida,
      intCentroCosto,
      strNombreCuentaSugerida,
      intCodigoProveedor,
      strNombreProveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_detallefacturasat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)', [strEmpresa, intDte, intNit, strProveedor, numericMonto, intIdMoneda, strDescripcion, intIdPais, intEstado, intCantidad, intCuentaContableSugerida, intCentroCosto, strNombreCuentaSugerida, intCodigoProveedor, strNombreProveedor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Tipo', async (req, res) => {
  try {
    const {
      strNombre,
      strDescripcion,
      intTipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_tipo($1,$2,$3)', [strNombre, strDescripcion, intTipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Estado', async (req, res) => {
  try {
    const {
      strNombre,
      strDescripcion,
      intEstadoFinal,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_estado($1,$2,$3)', [strNombre, strDescripcion, intEstadoFinal]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
