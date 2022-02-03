const express = require('express');
const controladorUsuarios = express.Router();


/* Get iniciar sesion
   Get obtener usuario por id
 */

   controladorUsuarios.get("/iniciarSesion",function (req, res) {
       let datos = req.query;
       res.send("Los datos del usuario son: "+ datos)
       
   });


   module.exports = controladorUsuarios;