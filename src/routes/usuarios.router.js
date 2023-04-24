const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Get_Documento_GrupoPermisos', async (req, res) => {
  try {
    const {
      strNombreGrupo,
      strNombreNivel,
      strDescripcionNivel,
      intEstado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_grupopermisos($1,$2,$3,$4)', [strNombreGrupo, strNombreNivel, strDescripcionNivel, intEstado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Login', async (req, res) => {
  try {
    const {
      strNombreAplicativo,
      strNombreUsuario,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_login($1,$2)', [strNombreAplicativo, strNombreUsuario]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
