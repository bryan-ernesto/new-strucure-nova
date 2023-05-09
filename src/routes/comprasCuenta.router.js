const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/GetCuentaClasificacion', async (req, res) => {
  try {
    const {
      cuentaClasficacionNombre,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_cuenta.get_cuenta_clasificacion($1,$2,$3);', [cuentaClasficacionNombre, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/GetCuenta', async (req, res) => {
  try {
    const {
      cuentaNombre,
      clasificacionId,
      idCreadoPor,
      idActualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_cuenta.get_cuenta($1,$2,$3,$4);', [cuentaNombre, clasificacionId, idCreadoPor, idActualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/UpdateCuentaClasificacion', async (req, res) => {
  const {
    clasificacionId,
    nombre,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_clasificacion_update($1,$2,$3,$4);', [clasificacionId, nombre, estado, actualizadoPor]);
  res.send('Cuenta clasificacion actualizada correctamente');
});

router.put('/UpdateCuenta', async (req, res) => {
  const {
    cuentaId,
    clasificacionId,
    nombre,
    descripcion,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_update($1,$2,$3,$4,$5,$6);', [cuentaId, clasificacionId, nombre, descripcion, estado, actualizadoPor]);
  res.send('Cuenta actualizada correctamente');
});

module.exports = {
  router,
};
