
//IMportamos el modelo Usuario
const Usuario = require('../models/usuario');

const getUsuarios = (req ,res) =>{

    res.json({
        ok: true,
        msj:'GEt Usuarios'
    });

}

const crearUsuario = async(req,res) =>{
//Como leer el Body
    //console.log(req.body );
    const {email, password, nombre} = req.body;

    const usuario = new Usuario(req.body);

    //para guardar en Base de datos
    //await = espera a que esta promesa termine
    await usuario.save();

    res.json({
        ok: true,
        usuario
    });

}

module.exports = {
    getUsuarios,
    crearUsuario
}


