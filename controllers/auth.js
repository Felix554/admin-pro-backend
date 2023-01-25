const {response} = require('express');
//Importamos la libreria par encriptar
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

const login = async(req, res = response) => {
    
    const { email, password } = req.body;

    try {
        //Validacion
        const usuarioDB = await Usuario.findOne({email});

        if (!usuarioDB) {
            return res.status(404).json({
                ok:false,
                msg:'Email o Clave invalida 1' 
            });
        }
        //Verificar clave
        //se compara si coinciden
        const validarPassword = bcrypt.compareSync(password, usuarioDB.password);

        if (!validarPassword) {
            return res.status(400).json({
                ok:false,
                msg:'Clave o Email invalido'
            });
        }

        //Generar el Token

        return res.json({
            ok:true,
            msg:'usuario autenticado Hola',
        })
    } catch (error) {
        return res.state(500).json({
            ok: false,
            msg:'Error inesperado'
        });
    }
}

module.exports={
    login
}