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
