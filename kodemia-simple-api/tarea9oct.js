/* Practica
  - Implementar metodos PATCH y DELETE en /koders
  PATCH /koders/:id -> actualiza informacion de un koder por id
  PATCH necesita un body y necesita que le pasemos el id por la ruta
  DELETE /koders/:id -> Borra un koder de la lista por id */

const { response, request } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

let koders = [
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
    response.json({
      success: true,
      message: 'Koders',
      data: {
        koders
      }
    })
  }
})

app.get('/koders/:id', (request, response) => {
  console.log(request.params.id)
  const id = request.params.id
  const koderFind = koders.find((koder) => {
    const isCorrectKoder = koder.id === parseInt(id)
    console.log(isCorrectKoder)
    return isCorrectKoder
  })
  response.json({
    success: true,
    data: {
      koder: koderFind
    }
  })
})

app.patch('/koders/:id', (request, response) => {
  // Obj: Actualizar el nombre de un item (koder)
  // Tomar el id del request
  // Buscar el koder al que le corresponde el id
  // Tomar la información del body (name)
  // Actualizar el nombre del koder correspondiente al id

  // Tomar el id del request
  console.log(request.params.id)
  const id = parseInt(request.params.id)

  const kodersActualizado = koders.map((koder) => {
    if (koder.id === id) {
      // Si el koder es el mismo koder del id solicitado
      const name = request.body.name
      koder.name = name
      // koder.name = request.body.name
    }
    return koder
  })

  koders = kodersActualizado

  response.json({
    success: true,
    message: 'El Koder fue actualizado',
    data: {
      koders
    }
  })
})

app.delete('/koders/:id', (request, response) => {
  const id = request.params.id - 1
  koders.splice(id, 1)

  koders.forEach((koder) => {
    koder.id = koders.indexOf(koder) + 1
  })

  response.json({
    success: true,
    message: 'Se eliminó el Koder',
    data: {
      koders
    }
  })
})

app.listen(8080, () => {
  console.log('Express listening in port 8080')
})
