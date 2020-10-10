/* Crear otro proyecto para hacer un API para de cervezas
CRUD
POST /chelas
GET /chelas
GET /chelas/:id
PATCH /chelas/:id
DELETE /chelas/:id
{
  id: 'abc123',
  marca: 'corona',
  tipo: 'pilsner',
  precio: 30
}
*/

const { response, request } = require("express")
const express = require("express")

const app = express()

app.use(express.json())

let chelas = [
  {
    id: "abc123",
    marca: "corona",
    tipo: "pilsner",
    precio: 30
  },
  {
    id: "abc124",
    marca: "xx ámbar",
    tipo: "pilsner",
    precio: 27
  },
  {
    id: "abc125",
    marca: "modelo",
    tipo: "pilsner",
    precio: 32
  }
]

app.get("/chelas", (request, response) => {
  response.json({
    succes: true,
    message: "Cervezas",
    data: {
      chelas: chelas
    }
  })
})

app.get("/chelas/:id", (request, response) => {
  const id = request.params.id
  const chelaFind = chelas.find((chela) => {
    const isCorrectChela = chela.id === id
    return isCorrectChela
  })
  console.log(chelaFind)
  if (chelaFind === undefined) {
    response.json({
      succes: false,
      message: "No se encuentra esa cerveza"
    })
  } else {
    response.json({
      succes: true,
      message: "Cerveza encontrada",
      data: {
        chelas: chelaFind
      }
    })
  }
})

app.post("/chelas", (request, response) => {
  if (request.body.id) {
    const id = request.body.id
    const marca = request.body.marca
    const tipo = request.body.tipo
    const precio = request.body.precio
    chelas.push({ id: id, marca: marca, tipo: tipo, precio: precio })
    response.json({
      succes: true,
      message: "Cervezas",
      data: {
        chelas
      }
    })
  }
})

app.patch("/chelas/:id", (request, response) => {
  console.log(request.params.id)
  const id = request.params.id

  const chelasActualizado = chelas.map((chela) => {
    if (chela.id === id) {
      const marca = request.body.marca
      const tipo = request.body.tipo
      const precio = request.body.precio
      chela.marca = marca
      chela.tipo = tipo
      chela.precio = precio
    }
    return chela
  })

  console.log(id)

  if (id === undefined) {
    response.json({
      succes: false,
      message: "No se encuentra esa cerveza"
    })
  } else {
    chelas = chelasActualizado
    response.json({
      succes: true,
      message: "La cerveza fue actualizada",
      data: {
        chelas
      }
    })
  }
})

app.delete("/chelas/:id", (request, response) => {
  const id = request.params.id
  console.log(id)
  let chelasFiltered = chelas.filter(chela => chela.id !== id)
  
  chelas = chelasFiltered
  
  response.json({
    succes: true,
    message: "Se eliminó la cerveza",
    data: {
      chelas
    }
  })
})

app.listen(8080, () => {
  console.log("Express listening in port 8080")
})
