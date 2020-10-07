// Aaron Barcenas
// Alfredo Santos Abascal
// Borja Rodriguez Torres
// Eddy Alexander Ruiz Alvarez
// Eric Jorge Isaac Trujillo
// Erick Sinaí Ramos Cabrera
// Erika Soriano Méndez
// Iván Martínez Toledo
// Luis Demetrio Bastida Palacios
// Luis Fernando Gomez Morin Duarte
// Walter Reinhard Ritter Pérez


// Crear un programa que pida un numero mayor que 5 al usuario y muestre
// todos los múltiplos de 3 desde cero hasta el número ingresado

// 1. Necesito un número del usuario
// 2. Condición que evalua que el número es mayor que 5
// 3. Si es mayor que 5 hacer
    // Mostrar los múltiplos de 3 existentes desde cero hasta el número del usuario
    // 3.1 Iniciar un contador en cero
    // 3.2 Si mi contador es menor que el número de usuario, evaluar si el contador es múltiplo
    //     de 3
    //     Si se cumple, imprimo el contador
    //     Si no se cumple, paso el siguiente número
    
    



// let number = parseInt(prompt('Ingresa un número mayor que 5'))
// let counter = 0

// if (number <= 5) {
//   alert ('El numero no es mayor')
// } else {
//   while (counter <= number) {
//     if (counter % 3 === 0) {
//       console.log(counter)
//     }  
//     counter++
//   }   
// }


// Usando una función 
// const printMultiples = () => {
//   let number = parseInt(prompt('Ingresa un número mayor que 5'))
//   let counter = 0

//   if (number <= 5) {
//     alert ('El numero no es mayor')
//     printMultiples()
//   } else {
//     while (counter <= number) {
//       if (counter % 3 === 0) {
//         console.log(counter)
//       }  
//       counter++
//     }   
//   }
// }

// // printMultiples()


// Teniendo la frase "La mejor forma de predecir el futuro es creandolo", crear un programa que imprima 
// una nueva frase usando unicamente las letras que tengan una posición par

// 1. Determinar la frase 
// 2. Recorrer la frase mientras sea menor a su longitud
// 3. Agregar cada caracter a una nueva RTCIceCandidatePairChangedEvent
//           L eo om epeei lftr scenoo
let frase = 'La mejor forma de predecir el futuro es creandolo'
        //   0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8
let nuevaFrase = ''
contador = 0

while (contador <= frase.length) {
  nuevaFrase += frase.charAt(contador)
  contador+=2
}
console.log(nuevaFrase)