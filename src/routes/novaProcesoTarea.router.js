const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Get_count_tareas_activas', async (req, res) => {
  try {
    const { intIdCatUsuario } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.get_count_tareas_activas($1);', [intIdCatUsuario]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_tiempo_activo_por_tarea', async (req, res) => {
  try {
    const {
      intIdCatUsuario,
      intIdCatTarea,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.get_count_tiempo_activo_x_dia_actual($1,$2);', [intIdCatUsuario, intIdCatTarea]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_tiempo_inactivo_por_usuario', async (req, res) => {
  try {
    const { intIdCatUsuario } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.get_count_tiempo_inactivo_x_dia_actual_usuario($1);', [intIdCatUsuario]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
