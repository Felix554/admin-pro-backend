/**
 * Ruta : /api/usuarios
 */
const { Router } = require('express');
const { check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');//Middleware Para las validaciones
//Importamos el controlador usuarios
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarios');

const router = Router();


router.get('/', getUsuarios);

//Crear Usuarios
router.post('/',
    [
        check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
        check('password', 'El password es Obligatorio').not().isEmpty(),
        check('email', 'El email es Obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario);

router.put('/:id',
        [
            check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
            check('email', 'El email es Obligatorio').isEmail(),
            check('role', 'El role es Obligatorio').not().isEmpty(),
            validarCampos,
        ],
        actualizarUsuario
);

router.delete('/:id',
        eliminarUsuario
);

module.exports = router;
