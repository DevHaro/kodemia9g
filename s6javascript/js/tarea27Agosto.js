/*
    pedir al usuario 10 números diferentes, almacenar esos números en un array, y entregar al usuario el resultado de la suma de los números ingresados
    */

let numbersArray = []

for (let i = 0; i < 3; i++) {
  numbersArray.push(parseInt(prompt('Ingresa un número:'))) 
}

/*Reduciendo números*/
// let additionResult = numbersArray.reduce( (acumulador, number ) => {
//   return acumulador + number
// },0)

let additionResult = numbersArray.reduce( (acumulador, number)  => acumulador + number, 0)

console.log("Resultado de reduce: ", additionResult)