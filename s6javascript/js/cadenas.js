// Pedir al usuario cual es la capital de México
// Verificar si es correcto 
// Entónces imprimir mensaje correcto
// Sino imprimir error

let capital = prompt('¿Cuál es la capital de México?')
let verified = capital.trim().toLowerCase()
let included = verified.includes('méxico')

if (included) {
  console.log('Si incluye la palabra México')
} else {
  console.log('No incluye la palabra México')
}

// if (verified === 'ciudad de méxico' || verified === 'ciudad de mexico') {
//   console.log('Es correcta la respuesta')
// } else {
//   console.error('error')
// }

// Métodos de busqueda

//Método indexOf()

// let saludo = 'Welcome to México'
// positionSaludo = saludo.indexOf('México')
// console.log(positionSaludo)

// Método include()
// var included = salute.includes('México');
// console.log(included)
 
// Método .startsWith()
// salute.startsWith()

// Metodo endsWith()
// salute.endsWith()


// // Métodos de manipulación de string
// let stringReplaced = salute.replace('México', 'Guadalajara')
// console.log(stringReplaced)

// // Método substring
// // Extraer de un string una parte de ella 
// // str.substr(inicio, fin)
// let stringSubstr = salute.substr(10)
// console.log(salute)

// // Método slice extrae un parte de un string 
// // stringReplaced.slice(inicio, fin)
// let stringSlice = salute.slice(0, 1)
// console.log(stringSlice)


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}