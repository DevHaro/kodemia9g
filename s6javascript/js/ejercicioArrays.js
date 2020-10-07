// Pedir la cantidad de koders a registrar
// Pedir el nombre del koder tantas veces se indicó registrar
// Guardar cada koder en una colección

// Con push se agrega cada nuevo elemento al final del array

// let number = parseInt(prompt('Ingresa la cantidad de koders'))
// let counter = 0
// let koders = []
// while (counter < number) {
//   let name = prompt('Ingresa el nombre')
//   koders.push(name)
//   counter++  
// }
// console.log(koders)

//Con splice se agrega cada elemento en la posicion que le indiquemos
// let number = parseInt(prompt('Ingresa la cantidad de koders'))
// let counter = 0
// let koders = []
// while (counter < number) {
//   let name = prompt('Ingresa el nombre')
//   koders.splice(0,0,name)
//   counter++  
// }

// console.log(koders)


// 1. recibir una frase del usuario
// 2. crear una coleccion con cada caracter dentro de esa frase
// 3. Si la coleccion excede más de 10 items entregar entregar la coleccion 
// con unicamente los primeros 10 items en un nuevo array

let phrase = prompt('Ingresa una frase')
let arreglo = phrase.split("")
newArray = []

if (arreglo.length>10) {  
  for (let index = 0; index < 10; index++) {  
    newArray.push(arreglo[index])    
  }
  console.log(newArray)  
} else {
  console.log(arreglo)
}
  




