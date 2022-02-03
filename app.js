/* Importacion de los modulos requeridos*/

const express = require('express');
const  bodyParser  = require('body-parser');
const morgan = require('morgan');
const controladorPeliculas = require('./api/peliculas/controller');
const controladorUsuarios = require('./api/usuarios/controller');
const conexion  = require ('./database/conecction');
require('dotenv').config();

/*iniciar configuracion*/

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan(process.env.MORGAN_MODE));

/*Iniciar las rutas*/

app.use("/api/peliculas", controladorPeliculas);
app.use("/api/usuarios", controladorUsuarios);


/* Configurar puerto que va  monitorear la api*/

conexion.conectar()
    .then(function() {
        app.listen(port, function () {
            console.log(conexion.obtenerConexion()); 
            console.log("API ejecutandose exitosamente en el puerto: " + port); 
           
    });
   
   })
   .catch(function (error) {
    console.log(error);
});