/**
 * Es muy parecido al controlador porque  va a tener es req, res y un parametro adicional
*/
const { response } = require('express');
const { validationResult } = require('express-validator');//obtener el arreglo de errores generados en la ruta

const validarCampos = (req, res= response, next) => {

    const errores = validationResult( req );//Obtenemos el arreglo de errores que pasaron en mi ruta

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors: errores.mapped()
        }); 
    }//Si pasa este puntpo nos indica que no hay errores por lo que llama a la siguiente función

    next();
    
}

//Exportamos validarCampos para que este disponible a lo largo de mi aplicación
//Y lo exportamos como un objetos por si toca agragar mas

module.exports = {
    validarCampos
}//Y lo utilizamos en la ruta

