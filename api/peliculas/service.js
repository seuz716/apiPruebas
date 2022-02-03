const modeloPeliculas = require('./model');

function obtenerPeliculas() {
    let peliculas = modeloPeliculas.findAll();
    return peliculas;
}

module.exports.obtenerPeliculas = obtenerPeliculas;