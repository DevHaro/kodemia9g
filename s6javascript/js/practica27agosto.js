let animals = [
  [
      "Gato",
      "Negro",
      "Pequeño"
  ],
  [
      "Perro",
      "Blanco",
      "Mediano"
  ],
  [
      "Caballo",
      "Bayo",
      "Grande"
  ]
]

/* Funcion constructora para animal, propiedades specie, color y size
Un metodo que imprima en consola 'Soy un { especie } de { color } y de tamaño { size}
Crear un Animal con cada set de datos del array animals 
Ejecutar el método de cada uno de los animales */

function Animal(specie, color, size ){
  this.specie = specie;
  this.color = color;
  this.size = size;
  this.presentation = function(){
    console.log(`Soy un ${specie} de color ${color} y de tamaño ${size}` )
  }
}

let animalsCollection = animals.map( data => {
  // let specie = data[0]
  // let color = data[1]
  // let size = data[2]
  // return new Animal(data[0], data[1], data[2])
  let [specie, color, size] = data  
  return new Animal(specie, color, size)
})

console.log(animalsCollection)

animalsCollection.forEach( (animal, index) => {
  animal.presentation()
})
