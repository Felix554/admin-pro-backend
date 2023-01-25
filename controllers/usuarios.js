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


const actualizarUsuario = async (req, res = response) => {
    //TODO Validar Token y comprovar si es el usuario correcto
    const uid= req.params.id;
    const campos = req.body;

    try {
        //Validaciones
        const usuarioDB = await Usuario.findById( uid)
        
        if (!usuarioDB) {
            //404 NO SE ENCONTRO
            return res.status(404).json({
                ok:false,
                msg: 'No existe el usuario con ese id'
            });
            
        }
        //Validamos que el Email enviado por el usuario sea el mismo por lo que no lo va a actualizar
        if (usuarioDB.email === req.body.email) {
            //PAra que no choque con la validacion de el email UNICO en BD
            delete campos.email;
        }else{
            //Casos contrario validamos que no exista en BD por la validacion de Email unico
            const emailExiste = await Usuario.findOne({ email: req.body.email});//El email enviado por el usuario
            if ( emailExiste ) {
                return res.status(400).json({
                    ok:false,
                    msg:'Ya existe un usurio con este Email'
                });
            }
        }

        //Actualizaciones
        delete campos.password;
        delete campos.google;
        //Busca el usuario por el id y actualiza los campos  { new:true } = para que retorne los nuevo valores y no los anteriores como respuesta
        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos,{ new:true });

        res.json({
            ok:true,
            usuario:usuarioActualizado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error Inesperado'
        })
        
    }

}



module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario
}


