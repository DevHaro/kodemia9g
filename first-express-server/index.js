const express = require('express')

// Definir server de express
const server = express()

// Definir métodos y rutas

// GET /hola
server.get('/hola', (request, response) => {
    console.log('Hola desde express')
    response.send('Hola desde express')
})

// POST
server.post('/hola', (request, response) => {
    console.log('Hola desde express con post')
    response.send('Hola desde express con post')
})

server.listen(8080, () => {
    console.log('Server is ready')
})


/* 
PRACTICA
Replicar el servidor que teníamos en http ahora con express
  POST /hola -> hola desde express con post
  GET /hola -> hola desde express con get
  GET /adios -> adios con get
  POST /adios adios con post
  Cualquier metodo a culquier otra ruta => no hay nada aqui (editado) 
*/