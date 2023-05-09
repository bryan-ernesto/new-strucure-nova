const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/GetDetallePresupuesto', async (req, res) => {
  try {
    const {
      idCatPresupuesto,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_presupuesto.get_detalle_presupuesto($1)', [idCatPresupuesto]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/GetAjustePresupuesto', async (req, res) => {
  try {
    const {
      cuentaAbonoId,
      cuentaCargoId,
      presupuestoId,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_bit_presupuesto_ajuste($1,$2,$3,$4,$5);', [cuentaAbonoId, cuentaCargoId, presupuestoId, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/GetPresupuestoEstado', async (req, res) => {
  try {
    const {
      nombre,
      creadoPor,
      actualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_presupuesto_estado($1,$2,$3);', [nombre, creadoPor, actualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/UpdatePresupuestoEstado', async (req, res) => {
  const {
    estadoId,
    nombre,
    descripcion,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_estado_update($1,$2,$3,$4,$5);', [estadoId, nombre, descripcion, estado, actualizadoPor]);
  res.send('Estado actualizado correctamente');
});

router.put('/UpdatePresupuesto', async (req, res) => {
  const {
    presupuestoId,
    empresaId,
    responsableId,
    presupuestoEstadoId,
    monto,
    año,
    estado,
    actualizadoPor,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_update($1,$2,$3,$4,$5,$6,$7,$8);', [presupuestoId, empresaId, responsableId, presupuestoEstadoId, monto, año, estado, actualizadoPor]);
  res.send('Presupuesto actualizado correctamente');
});

module.exports = {
  router,
};
