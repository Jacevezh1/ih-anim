// Creamos rutas en vez de hacerlo en index.js



// 1. IMPORTACION
const express = require("express")

// Crear ruteador
const router = express.Router()

// Llamar all archivo controler y sus funciones
const animeController = require('./../controllers/animes.controller')
console.log(animeController) // Me imprime la funcion Async creada en mi animeController


// 2. RUTAS (Funciones para cada vez que se llamen)

// Obtener los animes o mostart en pantalla
router.get('/', animeController.getAnimes)

// Editar anime, y se llama a la funcion de controler
// Esto es un QUERYPARAMS, son parametros que paso a traves de la url
router.put('/:id/update', animeController.putAnimes)


// 4. EXPORTACION
module.exports = router



// Instalar body parsel: libreria o modulo que se usa con express para almacenar datos de clientes, rec.body
// Nos ayuda a leer los datos enviados por el cliente, metodo POST, y los guarda en un objeto para que lo podamos leerr