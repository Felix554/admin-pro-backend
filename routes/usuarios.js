/**
 * Ruta : /api/usuarios
 */
const { Router } = require('express');
//Importamos el controlador usuarios
const { getUsuarios, crearUsuario} = require('../controllers/usuarios')
const router = Router();


router.get('/', getUsuarios);
//Crear Usuarios
router.post('/', crearUsuario);

module.exports = router;
