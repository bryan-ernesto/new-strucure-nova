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

router.put('/UpdateProveedorTipo', async (req, res) => {
  const {
    tipoId,
    nombre,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_tipo_update($1,$2,$3,$4);', [tipoId, nombre, estado, actualizadoPor]);
  res.send('Tipo proveedor actualizado correctamente');
});

router.put('/UpdateProveedorGiro', async (req, res) => {
  const {
    giroId,
    nombre,
    descripcion,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_giro_update($1,$2,$3,$4,$5);', [giroId, nombre, descripcion, estado, actualizadoPor]);
  res.send('Giro proveedor actualizado correctamente');
});

router.put('/UpdateProveedor', async (req, res) => {
  const {
    proveedorId,
    giroId,
    tipoId,
    nombre,
    nit,
    email,
    telefono,
    celular,
    rtu,
    estado,
    actualizadoPor,
    idCatUsuario,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_update($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);', [proveedorId, giroId, tipoId, nombre, nit, email, telefono, celular, rtu, estado, actualizadoPor, idCatUsuario]);
  res.send('Proveedor actualizado correctamente');
});

module.exports = {
  router,
};
