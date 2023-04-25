const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/GetProveedorTipo', async (req, res) => {
  try {
    const {
      nombre,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor_tipo($1,$2,$3);', [nombre, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/GetProveedorGiro', async (req, res) => {
  try {
    const {
      nombre,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor_giro($1,$2,$3);', [nombre, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/GetProveedor', async (req, res) => {
  try {
    const {
      nombre,
      nit,
      correo,
      proveedorTipoId,
      proveedorGiroId,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor($1,$2,$3,$4,$5,$6,$7);', [nombre, nit, correo, proveedorTipoId, proveedorGiroId, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
