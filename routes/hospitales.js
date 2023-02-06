/**
 * Hospitales
 * path:/ api/hospitales'
 */

const { Router } = require('express');
const { check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');//Middleware Para las validaciones
const { validarJWT } = require('../middlewares/validar-jwt');//Middleware Para las validaciones del Token
//Importamos el controlador usuarios
const { getHospitales, crearHospitales, actualizarHospitales, eliminarHospitales} = require('../controllers/hospitales');

const router = Router();


router.get('/', getHospitales);

//Crear Usuarios
router.post('/',
    [
    ],
    crearHospitales);

router.put('/:id',
        [
        ],
        actualizarHospitales
);

router.delete('/:id',
        eliminarHospitales
);

module.exports = router;

