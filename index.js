require('dotenv').config();

const express = require('express'); //Linea de el como se importan las librerias en NODE
const cors = require('cors'); //Permite peticiones desde varios Dominios si asi lo deseas

const { dbConnection } = require('./database/config');//Va entre llaves para desestructurar si contiene otros valores el objeto y mas adelante le quiera agregar otros valores

//Crear el servidor de Expres
const app = express(); //Crea o inicializa la aplicacion de Express

//Configurar CORS
app.use(cors());
/**
 * use es como un midelwer que ejecuta la funcion cors a todas las lineas que estan hacia abajo
 */

//Lectura y parseo del Body (Envio de datos)
app.use(express.json());//Ojo debe ir antes de la ruta 
 
//Base de Datos
dbConnection();

console.log( process.env );

//mean_user
//7Bx3geK0cUDyXKdr

//Rutas
//Utilizamos los Midelwers + Ruta 
app.use('/api/usuarios', require('./routes/usuarios') );
app.use('/api/login', require('./routes/auth') );
/*app.get('/', (req,res) =>{

    res.json({
        ok: true,
        msj: 'Hola Mundo'
    });

});*/

//Para levantarlo
//app.listen(3000, () =>{
app.listen( process.env.PORT, () =>{
    console.log("Servidor corriendo por el puerto:" + process.env.PORT);
});
