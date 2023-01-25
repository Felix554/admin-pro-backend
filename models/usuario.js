const { Schema, model } = require("mongoose");//Importamos la libreria de mongoose

//Creamos el Schema y Su definicion
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required:true,
        default: 'USER_ROLE'
    },
    google: {
        type:Boolean,
        default: false
    },

});

/*MODIFICAR LA NOMENCLATURA DEL CAMPO _id por udi
*Esto es para fines visuales y no me modifica la Base de Datos
*/
UsuarioSchema.method('toJSON', function(){
    //Obtener la instancia del objeto actual
    /**
     * Extraigo los siguientes valores de ese objeto
     * __v, _id,password, ...Object y no los muestre en el resultado
     */
    const {__v, _id, password, ...Object }=this.toObject();

    Object.uid = _id;
    return Object;
})
/**
 * La tabla usuario se realiza en singular porque mongoose al crearla por defecto le agrega una S para colocarla en plural
 */
module.exports = model('Usuario', UsuarioSchema);
