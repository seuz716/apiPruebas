const modeloPeliculas = require('./model');

async function obtenerPeliculas() {
    let peliculas = await modeloPeliculas.findAll();
    return peliculas;
}

async function obtenerPelicula(id) {
    let pelicula = await modeloPeliculas.obtenerUna(id);
    return pelicula;
}

async function obtenerPeliculasPorTitulo(titulo){
    let peliculas = await modeloPeliculas.obtenerPorTitulo(titulo);
    return peliculas;
}


module.exports.obtenerPeliculas = obtenerPeliculas;  
module.exports.obtenerPelicula = obtenerPelicula; 
module.exports.obtenerPeliculasPorTitulo = obtenerPeliculasPorTitulo;