//Para las ayudas de Res
const { response } = require('express');
//Importamos la libreria par encriptar
const bcrypt = require('bcryptjs');

//IMportamos el modelo Usuario
const Usuario = require('../models/usuario');

const getUsuarios = async(req ,res) =>{

    //const usuarios = await Usuario.find(); //Envia todos los datos
    //{} = idicar un filtro + el nombre del filtro
    const usuarios = await Usuario.find({}, 'nombre email role google' );

    res.json({
        ok: true,
        usuarios
    });

}

const crearUsuario = async(req,res = response) =>{

    //Como leer el Body
    //console.log(req.body );
    const {email, password, nombre} = req.body;

    //Para el manejos de Errores


    try {

        //Validar si Email Existe
        const existeEmail = await Usuario.findOne({ email });//Esperamos respuesta con el await

        if (existeEmail) {
            return res.status(400).json({
                ok:false,
                msj: 'El Correo ya estaba registrado'
            });
        }

        const usuario = new Usuario(req.body);

        //Encriptar Clave
        //Generamos la data de manera aleatoria
        const salt          =   bcrypt.genSaltSync();
        usuario.password    =   bcrypt.hashSync(password, salt); 

        //para guardar en Base de datos
        //await = espera a que esta promesa termine
        await usuario.save();

        res.json({
            ok: true,
            usuario
        });
        
    } catch (error) {
 
        console.log(error)

        res.status(500).json({

            ok:false,
            msj: 'Error inesperado... revisar logs'

        });
    }

    

}

module.exports = {
    getUsuarios,
    crearUsuario
}


