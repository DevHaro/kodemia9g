
const express = require('express')

const app = express()

app.use(express.json())

const koders = [
  {
    id: 1,
    name: 'Mauro'
  }, {
    id: 2,
    name: 'Axel'
  }, {
    id: 3,
    name: 'Haro'
  }
]

app.get('/koders', (request, response) => {
  response.json({
    success: true,
    data: {
      koders: koders
    }
  })
})

app.post('/koders', (request, response) => {
  if (request.body.name) {
    const id = koders.length + 1
    const name = request.body.name
    koders.push({ id: id, name: name })
    console.log(koders)
    response.json({
      success: true,
      data: {
        koders
      }
    })
  }
})

app.listen(8080, () => {
  console.log('Server is listening in the port 8080')
})

/* Practica
  - Ocupar el json de la peticion para agregar
    un nuevo koder al array de koders
  - Comprobar con un get que el koder fue agregado

*/
