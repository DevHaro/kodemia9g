const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición entrante' + request.url)
    response.write('Hola desde node')
    response.end()
})

server.listen(8080, () => {
    console.log('El servidor esta escuchando en el puerto 8080')
})

