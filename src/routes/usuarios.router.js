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

router.post('/Get_Documento_UsuarioAsignacionPermiso', async (req, res) => {
  try {
    const {
      intIdUsuario,
      intPermiso,
      strNombreUsuario,
      strNombreEmpresa,
      strNombreEquipo,
      strNombreDepartamento,
      intEstado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_usuarioasignacionpermiso($1,$2,$3,$4,$5,$6,$7)', [intIdUsuario, intPermiso, strNombreUsuario, strNombreEmpresa, strNombreEquipo, strNombreDepartamento, intEstado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_GrupoAsignacionAplicativo', async (req, res) => {
  try {
    const {
      strNombreGrupo,
      strNombreAplicativo,
      strNombreNivel,
      strDescripcionNivel,
      intEstado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_grupoasignacionaplicativo($1,$2,$3,$4,$5)', [strNombreGrupo, strNombreAplicativo, strNombreNivel, strDescripcionNivel, intEstado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Puestos', async (req, res) => {
  try {
    const {
      strPuestoNombre,
      intCreadoPor,
      intActualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_puestos($1,$2,$3);', [strPuestoNombre, intCreadoPor, intActualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Puestos_Equipo', async (req, res) => {
  try {
    const { intIdCatPuesto } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_asignacion_equipo($1);', [intIdCatPuesto]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Equipos', async (req, res) => {
  try {
    const {
      strEquipoNombre,
      intIdCatDepartamento,
      intIdCatEmpresa,
      intCreadoPor,
      intActualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipos($1,$2,$3,$4,$5);', [strEquipoNombre, intIdCatDepartamento, intIdCatEmpresa, intCreadoPor, intActualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Equipo_Responsable', async (req, res) => {
  try {
    const {
      intIdCatUsuario,
      intCatEquipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipo_responsable($1,$2);', [intIdCatUsuario, intCatEquipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Equipo_Usuarios', async (req, res) => {
  try {
    const {
      intIdCatUsuario,
      intCatEquipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipo_usuario($1,$2);', [intIdCatUsuario, intCatEquipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_usuarios', async (req, res) => {
  try {
    const {
      strUsuarioNombre,
      intCreadoPor,
      intActualizadoPor,
      strUsername,
      intEmpresa,
      intDepartamento,
      intEquipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_usuarios($1,$2,$3,$4,$5,$6,$7);', [strUsuarioNombre, intCreadoPor, intActualizadoPor, strUsername, intEmpresa, intDepartamento, intEquipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_usuario_puestos', async (req, res) => {
  try {
    const {
      intIdCatUsuario,
      predeterminado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_usuario_puestos($1,$2);', [intIdCatUsuario, predeterminado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_empresas', async (req, res) => {
  try {
    const {
      strEmpresaNombre,
      intIdDelta,
      strNombreDelta,
      intCreadoPor,
      intActualizadoPor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_empresas($1,$2,$3,$4,$5);', [strEmpresaNombre, intIdDelta, strNombreDelta, intCreadoPor, intActualizadoPor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_empresa_responsable', async (req, res) => {
  try {
    const {
      intIdCatUsuario,
      intIdCatEmpresa,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_empresa_responsable($1,$2);', [intIdCatUsuario, intIdCatEmpresa]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_departamentos', async (req, res) => {
  try {
    const {
      strDepartamentoNombre,
      intCreadoPor,
      intActualizadoPor,
      intIdCatEmpresa,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_departamentos($1,$2,$3,$4);', [strDepartamentoNombre, intCreadoPor, intActualizadoPor, intIdCatEmpresa]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_departamento_responsable', async (req, res) => {
  try {
    const { intIdCatDepartamento } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_departamento_responsable($1);', [intIdCatDepartamento]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Usuario', async (req, res) => {
  try {
    const {
      strUsuarioNombre,
      intCreadoPor,
      intActualizadoPor,
      strUsername,
      intEmpresa,
      intDepartamento,
      intEquipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_usuario($1,$2,$3,$4,$5,$6,$7)', [strUsuarioNombre, intCreadoPor, intActualizadoPor, strUsername, intEmpresa, intDepartamento, intEquipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
