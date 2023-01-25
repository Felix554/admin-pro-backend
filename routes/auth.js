/**
 * Path = /api/login
 */

const { Router } = require('express');
const { check } = require('express-validator');
//Importamos el controlador
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/',
    [
        //Validacion con los middlewares
        check('email','El correo es obligatprio').isEmail(),
        check('password','La clave es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login
);

module.exports = router;