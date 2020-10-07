// for
// Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

// Sintaxis
// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

console.log('Ciclo for')
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let result = i*j
    console.log(i, 'x', j, ' = ', result)    
  }
  console.log('\n');  
}


// while
// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

// Sintaxis
// while (condicion)
//   sentencia

// condicion
// Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

// sentencia
// Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias.

console.log( '\n')
console.log('while')
let message = '';
let number = 1;
while (number <= 10) 
	{ 
	message += 'El valor de number es: ' + number + '\n'; 
	number++;
	}
console.log(message)

// do while

// Sintaxis
// do
//    sentencia
// while (condición);

// sentencia
// Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia block ({ ... }) para agrupar aquellas sentencias.

// condición
// Una expresión se evalúa después de cada pase del bucle. Si condición se evalúa como verdadera, la sentencia se re-ejecuta. Cuando condición se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras.

// La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

console.log( '\n')
console.log('do while')
let otherMessage = '';
let otherNumber = 1;
	do{ 
	otherMessage += 'El valor de other number es: ' + otherNumber + '\n'; 
	otherNumber++;
	}while (otherNumber <= 10) 
console.log(otherMessage);