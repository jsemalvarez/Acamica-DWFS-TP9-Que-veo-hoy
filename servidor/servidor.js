//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var peliculasControlador = require('./controladores/peliculasControlador.js');
var generosControlador = require('./controladores/generosControlador.js');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/peliculas',peliculasControlador.listarPeliculas);

app.get('/peliculas/:id',peliculasControlador.obtenerPelicula);

app.get('/generos',generosControlador.listarGeneros);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

