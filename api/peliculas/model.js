const { ObjectId } = require('mongodb');
const basedatos = require('./../../database/conecction');

function findAll(){
    let db = basedatos.obtenerConexion();
    db.collection("peliculas").find({}).toArray()
    .themn(function (peliculas) {
        return peliculas
    })
    .catch(function (error) {
        console.log(error);
    })
}

function obtenerUna(id) {
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").find({"id":ObjectId(id)})
    .then(function (pelicula) {
        return pelicula;
    })
    .catch( function (error) {
        console.log(error);
    } )
}

function obtenerPorTitulo(titulo) {
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").find({"titulo":new RegExp(titulo, "i")}).toArray()
    .then(function (peliculas) {
        return peliculas;        
    })
    .catch(function (error) {
        console.log(error);
    })
    
}

module.exports.findAll = findAll;
module.exports.obtenerUna = obtenerUna;
module.exports.obtenerPorTitulo = obtenerPorTitulo;