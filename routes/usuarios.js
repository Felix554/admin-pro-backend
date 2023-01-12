/**
 * Ruta : /api/usuarios
 */
const { Router } = require('express');
const { check} = require('express-validator');

//Importamos el controlador usuarios
const { getUsuarios, crearUsuario} = require('../controllers/usuarios')
const router = Router();


router.get('/', getUsuarios);

//Crear Usuarios
router.post('/',
    [
        check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
        check('password', 'El password es Obligatorio').not().isEmpty(),
        check('email', 'El email es Obligatorio').isEmail(),
    ],
    crearUsuario);

module.exports = router;
