/* Programa que muestra el resultado de dos diferentes 
operaciones aritméticas que conocemos entre dos números
suma +, resta -, multiplicacion *, división, modulo % */

var num1 = (parseInt(prompt("Ingresa un valor")))
var num2 = (parseInt(prompt("Ingresa otro valor")))

var suma = num1 + num2
var resta = num1 - num2
var multiplicacion = num1 * num2
var division = num1 / num2
var modulo = num1 % num2

/* Como indicar si number 1 es mayor que number 2 */

// Si num1 es mayor que num2, escribir un mensaje que diga num1 es mayor que num2
// sino escribir un mensaje num1 no es mayor que num2
if (num1 > num2) {
  console.log('num1 es mayor que num2')
} else {
  console.log('num1 no es mayor que num2')
}

var tipoNum1=(num1%2)? " Impar" : " Par";
var tipoNum2=(num2%2)? " Impar" : "s Par";

console.log(num1 + (tipoNum1))
console.log(num2 + (tipoNum2))


if(num1%2 && num2%2){
  console.log("Los dos números son impares")
} else if (!(num1%2) && !(num2%2)){
  console.log("Los dos son pares");
} else if(num1%2 && !(num2%2) ){
  console.log("El segundo número es par");
} else if(num2%2 && !(num1%2) ) {
  console.log("El primer número es par");
}