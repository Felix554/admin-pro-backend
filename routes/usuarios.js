/**
 * Ruta : /api/usuarios
 */

const { Router } = require('express');
//Importamos el controlador usuarios
const { getUsuarios} = require('../controllers/usuarios')

const router = Router();

router.get('/', getUsuarios);

module.exports = router;
