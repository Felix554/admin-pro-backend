const { response } = require('express');


const getHospitales = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a getHospitales'
    });
}

const crearHospitales = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a crearHospitales'
    });
}

const actualizarHospitales = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a actualizarHospitales'
    });
}

const eliminarHospitales = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'Intro a eliminarHospitales'
    });
}


//Exportamos 
module.exports = {
    getHospitales,
    crearHospitales,
    actualizarHospitales,
    eliminarHospitales
}