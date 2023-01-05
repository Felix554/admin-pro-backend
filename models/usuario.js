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

/**
 * La tabla usuario se realiza en singular porque mongoose al crearla por defecto le agrega una S para colocarla en plural
 */
module.exports = model('Usuario', UsuarioSchema);
