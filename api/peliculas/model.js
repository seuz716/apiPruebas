const basedatos = require('./../../database/conecction');

function findAll(){
    let conexion = basedatos.obtenerConexion();
    
}

module.exports.findAll = findAll;