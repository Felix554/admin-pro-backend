
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


