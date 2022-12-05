const express = require('express'); //Linea de el como se importan las librerias en NODE
require('dotenv').config();
const { dbConnection } = require('./database/config');//Va entre llaves para desestructurar si contiene otros valores el objeto y mas adelante le quiera agregar otros valores

//Crear el servidor de Expres
const app = express(); //Crea o inicializa la aplicacion de Express

//Base de Datos
dbConnection();

console.log( process.env );

//mean_user
//7Bx3geK0cUDyXKdr

//Rutas
app.get('/', (req,res) =>{

    res.json({
        ok: true,
        msj: 'Hola Mundo'
    });

})


//PAra levantarlo
//app.listen(3000, () =>{
app.listen( process.env.PORT, () =>{
    console.log("Servidor corriendo por el puerto:" + process.env.PORT);
});
