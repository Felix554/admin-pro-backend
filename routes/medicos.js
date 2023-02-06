/**
 * Medicos
 * Path: /api/medicos
 */
const { Router } = require('express');
const { check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');//Middleware Para las validaciones
const { validarJWT } = require('../middlewares/validar-jwt');//Middleware Para las validaciones del Token
//Importamos el controlador usuarios
const { getMedicos, crearMedicos, actualizarMedicos,  eliminarMedicos} = require('../controllers/medicos');

const router = Router();


router.get('/', getMedicos);

//Crear Usuarios
router.post('/',
    [
    ],
    crearMedicos);

router.put('/:id',
        [
        ],
        actualizarMedicos
);

router.delete('/:id',
    eliminarMedicos
);

module.exports = router;