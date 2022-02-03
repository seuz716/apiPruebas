const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service')


controladorPeliculas.get("/buscarPeliculas",function (req, res) {
    let peliculas = servicioPeliculas.obtenerPeliculas()
    res.send({
    "data": peliculas
    });
});

module.exports = controladorPeliculas;

controladorPeliculas.get("/obtenerPelicula/:id", async function (req, res) {
    let id = req.params.id;
    let pelicula = await servicioPeliculas.obtenerPelicula(id);
    res.send({
        "mensaje ": "pelicula",
        "data":pelicula
    })
})

controladorPeliculas.get("/obtenertPeliculasPorTitulo/:titulo" , async function (req, res) {
    let titulo = req.params.titulo;
    let peliculas = await servicioPeliculas.obtenerPeliculasPorTitulo(titulo);
    res.send({
        "mensaje": "resultado de busqueda",
        "data": peliculas
    });
    
})