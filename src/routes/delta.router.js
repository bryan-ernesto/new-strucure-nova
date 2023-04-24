const express = require('express');
const { getConnCuenta } = require('../db/config.delta');

const router = express.Router();

router.post('/Get_Documento_CuentasM', async (req, res) => {
  try {
    const {
      strEmpresa,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TRIM(CLAVE) AS CLAVE, TRIM(EMPRESA) AS EMPRESA, TRIM(NOMBRE) AS NOMBRE, ESTATUS FROM CUENTA WHERE EMPRESA LIKE '${strEmpresa}' OR '${strEmpresa}' = '' AND SUMARIA_O_MOVTO = 'M'`);
    const data = result.recordset.map((row) => ({
      CLAVE: row.CLAVE,
      EMPRESA: row.EMPRESA,
      NOMBRE: row.NOMBRE,
      ESTATUS: row.ESTATUS,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_CuentaSugerida', async (req, res) => {
  try {
    const {
      strClaveEmpresa,
      strCuentaEmpresa,
      intNitProveedor,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TOP 1 TRIM(Conta.CUENTA_CONTABLE) AS CUENTA_CONTABLE, COUNT(Conta.CUENTA_CONTABLE) as NumRepeticiones, TRIM(Cuenta.NOMBRE) AS NOMBRE_CUENTA_SUGERIDA, CONVERT(VARCHAR(50), Conta.CENTRO_DE_COSTO) AS CENTRO_DE_COSTO, TRIM(CentroCosto.DESCRIPCION) AS DESCRIPCION_CENTRO_DE_COSTO, TRIM(Proveedor.N_I_T) AS NIT_PROVEEDOR, TRIM(Proveedor.NOMBRE_COMPLETO) AS NOMBRE_PROVEEDOR
    FROM CGO_CXP AS Cargo
    LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
    LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
    LEFT JOIN PRVEEDOR AS Proveedor ON Cargo.PROVEEDOR = Proveedor.NUMERO
    LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
    LEFT JOIN CTROCSTO AS CentroCosto ON Conta.CENTRO_DE_COSTO = CentroCosto.NUMERO
    WHERE Empresa.CLAVE = '${strClaveEmpresa}' AND Cuenta.EMPRESA = '${strCuentaEmpresa}'  AND Conta.CUENTA_CONTABLE <> '170505001'  AND Conta.VALOR_CARGO <> 0  AND TRIM(REPLACE(Proveedor.N_I_T,'-',''))  = '${intNitProveedor}'
    GROUP BY Conta.CUENTA_CONTABLE, Cuenta.NOMBRE, Conta.CENTRO_DE_COSTO, CentroCosto.DESCRIPCION, TRIM(Proveedor.N_I_T), Proveedor.NOMBRE_COMPLETO
    HAVING COUNT(Conta.CUENTA_CONTABLE) = (
      SELECT MAX(CuentaContableCount) as MaxCount
      FROM (
        SELECT COUNT(Conta.CUENTA_CONTABLE) as CuentaContableCount
        FROM CGO_CXP AS Cargo
        LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
        LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
        LEFT JOIN PRVEEDOR AS Proveedor ON Cargo.PROVEEDOR = Proveedor.NUMERO
        LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
        LEFT JOIN CTROCSTO AS CentroCosto ON Conta.CENTRO_DE_COSTO = CentroCosto.NUMERO
        WHERE Empresa.CLAVE = 'PERFILES' AND Cuenta.EMPRESA = 'PERFILES' AND Conta.CUENTA_CONTABLE <> '170505001' AND Conta.VALOR_CARGO <> 0 AND TRIM(REPLACE(Proveedor.N_I_T,'-',''))  = '35243171'
        GROUP BY Conta.CUENTA_CONTABLE
      ) as CuentaContableCounts
    )`);
    const data = result.recordset.map((row) => ({
      CUENTA_CONTABLE: row.CUENTA_CONTABLE,
      NumRepeticiones: row.NumRepeticiones,
      NOMBRE_CUENTA_SUGERIDA: row.NOMBRE_CUENTA_SUGERIDA,
      CENTRO_DE_COSTO: row.CENTRO_DE_COSTO,
      DESCRIPCION_CENTRO_DE_COSTO: row.DESCRIPCION_CENTRO_DE_COSTO,
      NIT_PROVEEDOR: row.NIT_PROVEEDOR,
      NOMBRE_PROVEEDOR: row.NOMBRE_PROVEEDOR,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Centros_Costo', async (req, res) => {
  try {
    const result = await getConnCuenta.query('SELECT NUMERO, TRIM(CLAVE) AS CLAVE, TRIM(DESCRIPCION) AS DESCRIPCION FROM CTROCSTO C WHERE STATUS = \'A\'');
    const data = result.recordset.map((row) => ({
      NUMERO: row.NUMERO,
      CLAVE: row.CLAVE,
      DESCRIPCION: row.DESCRIPCION,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
