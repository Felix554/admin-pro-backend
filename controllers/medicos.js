const { response } = require('express');


const getMedicos = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a getMedicos'
    });
}

const crearMedicos = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a crearMedicos'
    });
}

const actualizarMedicos = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a actualizarMedicos'
    });
}

const eliminarMedicos = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a eliminarMedicos'
    });
}


//Exportamos 
module.exports = {
    getMedicos,
    crearMedicos,
    actualizarMedicos,
    eliminarMedicos
}