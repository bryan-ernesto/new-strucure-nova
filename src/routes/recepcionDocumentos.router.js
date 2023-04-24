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
      strNit,
      strProveedor,
      numericMonto,
      intIdMoneda,
      strDescripcion,
      intIdPais,
      intEstado,
      intCuentaContableSugerida,
      intCentroCosto,
      strNombreCuentaSugerida,
      intCodigoProveedor,
      strNombreProveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_detallefacturasat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [strEmpresa, intDte, strNit, strProveedor, numericMonto, intIdMoneda, strDescripcion, intIdPais, intEstado, intCuentaContableSugerida, intCentroCosto, strNombreCuentaSugerida, intCodigoProveedor, strNombreProveedor]);
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

router.post('/Get_Documento_EstadoAsignacionCanal', async (req, res) => {
  try {
    const {
      strNombreEstado,
      strNombreCanal,
      strProgreso,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_estadoasignacioncanal($1,$2,$3)', [strNombreEstado, strNombreCanal, strProgreso]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Solicitud', async (req, res) => {
  try {
    const {
      intIdSolicitud,
      intIndividualMasiva,
      strNombreEstado,
      strNombreTipo,
      strNombreEmpresa,
      intIdAdjuntoSharepoint,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicitud($1,$2,$3,$4,$5,$6)', [intIdSolicitud, intIndividualMasiva, strNombreEstado, strNombreTipo, strNombreEmpresa, intIdAdjuntoSharepoint]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudDetalle', async (req, res) => {
  try {
    const {
      intIdSolicitud,
      intIdEmpresa,
      strNombreEmpresa,
      intIdEstado,
      strNombreEstado,
      intDte,
      strProveedor,
      intNit,
      numericMonto,
      intIdMoneda,
      strDescripcion,
      intIdPais,
      intIdSharepoint,
      intEstado,
      intCantidad,
      intCuentaContableSugerida,
      intCentroCosto,
      strNombreCuentaSugerida,
      strCodigoProveedor,
      strNombreProveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicituddetalle($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)', [intIdSolicitud, intIdEmpresa, strNombreEmpresa, intIdEstado, strNombreEstado, intDte, strProveedor, intNit, numericMonto, intIdMoneda, strDescripcion, intIdPais, intIdSharepoint, intEstado, intCantidad, intCuentaContableSugerida, intCentroCosto, strNombreCuentaSugerida, strCodigoProveedor, strNombreProveedor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudBitacora', async (req, res) => {
  try {
    const {
      intIdRecepcionSolicitud,
      inIndividualMasiva,
      strNombreEstado,
      intEstado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicitudbitacora($1,$2,$3,$4)', [intIdRecepcionSolicitud, inIndividualMasiva, strNombreEstado, intEstado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudDetalleBitacora', async (req, res) => {
  try {
    const {
      intIdDetDocumentoRecepcionSolicitudDetalle,
      intDetDocumentoRecepcionSolicitud,
      strNombreEstado,
      intEstado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicituddetallebitacora($1,$2,$3,$4)', [intIdDetDocumentoRecepcionSolicitudDetalle, intDetDocumentoRecepcionSolicitud, strNombreEstado, intEstado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
