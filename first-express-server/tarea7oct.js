/* 
PRACTICA
Replicar el servidor que teníamos en http ahora con express
  POST /hola -> hola desde express con post
  GET /hola -> hola desde express con get
  GET /adios -> adios con get
  POST /adios adios con post
  Cualquier metodo a culquier otra ruta => no hay nada aqui (editado) 
*/
const express = require('express')

// Definir server de express
const server = express()

// Definir métodos y rutas

server.get('/hola', (req, res) => {
    res.send('hola desde express con get')
})

server.post('/hola', (req, res) => {
    res.send('hola desde express con post')
})

server.get('/adios', (req, res) => {
    res.send('adios con get')
})
  
server.post('/adios', (req, res) => {
    res.send('adios con post')
})
    
server.all('*', (req, res) => {
    res.send('no hay nada aqui')
})
  
server.listen(8080, () => {
    console.log(`Server express is listening`)
})