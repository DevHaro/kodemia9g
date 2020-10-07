let usersArray=[
  [
      "Israel",
      "Salinas"
  ],
  [
      "Alejandro",
      "Bosch"
  ],
  [
      "Charles",
      "Silva"
  ],
  [
      "David",
      "Moranchel"
  ]
]
/* teniendo usersArray, obtener un nuevo array que contenga strings con los nombres completos de los usuarios*/
/*output => [
  "Israel Salinas",
  "Alejandro Bosch",
  "Charles Silva",
  "David Moranchel"
]*/

let fullNamesArray = usersArray.reduce( (accum, user) => {
  fullName = user.join(" ")
  return [...accum, fullName]
  // return [...accum, user.join(" ")]
},[])

console.log(fullNamesArray)

/*palabra reservada function, nombre de la función, ( parámetros ) { contenido de la función }*/
/*function printName(){
}*/
/*Arrow functions*/
/* palabra reservada const, nombre de la función, operador de asignación, ( parámetros ) => { contenido de la función }*/
/*const printName = () => {
}*/
const printName = ( nameToPrint ) => {
  console.log( nameToPrint )
}
let someArray = [
  'Brisset Corcino Paz',
  'Brenda González Quesada',
  'Leonardo Santiago',
  'Aaron Barcenas',
  'Israel Salinas Martínez'
]
let breedsArray = [
  "basset hound",
  "doberman",
  "snauzcher",
  "hushky",
  "pug"
]
someArray.forEach( ( name, index ) => {
  console.log("name ", name)
  console.log("index ", index)
})
const getInitials = ( name ) => {
  let dividedName = name.split(" ")
  console.log(dividedName)
  let nameInitials = "" /*I. S. M.*/
  dividedName.forEach( name => {
      let initial = name.charAt(0) + '. '
      nameInitials += initial
  })
  return nameInitials + ' ' + name.length
}
let initials = someArray.map( name => getInitials( name ) )
let filteredNames = someArray.filter( name => name.length > 15 )
console.log(initials)
console.log(filteredNames)
/*
  teniendo el siguiente array:
  [
      Guadalajara,
      Monterrey,
      Nuevo León,
      Guanajuato,
      CDMX,
      Temascalapa,
      Toluca,
      Playa del Carmen,
      Chiapas,
      Michoacán
  ]
  1.- Por cada ciudad, imprimir el nombre de la ciudad y las 3 primeras letras del nombre en mayúscula
  input = Guadalajara
  output = Guadalajara, GUA
  2.- Crear un nuevo array que contenga los nombres de cada ciudad pero sin vocales
  input  = Guadalajara
  output = gdljr
  3.- Crear un nuevo array que contenga unicamente las ciudades que terminen en letra "n"
  */
/*1.- usar forEach*/
/*1.- Por cada ciudad, imprimir el nombre de la ciudad y las 3 primeras letras del nombre en mayúscula
  input = Guadalajara
  output = Guadalajara, GUA*/
let cities = [
  "Guadalajara",
  "Monterrey",
  "Nuevo León",
  "Guanajuato",
  "CDMX",
  "Temascalapa",
  "Toluca",
  "Playa del Carmen",
  "Chiapas",
  "Michoacán"
]
cities.forEach( city => {
  console.log( city.charAt(-1) )
  let firstLetters = city.substring(0, 3).toUpperCase()
  console.log(city + ", " + firstLetters)
})
let withoutVowels = cities.map( city => {
  let modString = city.replace(/[aeiouáéíóú]/ig,'')
  return modString
})
let filteredCities = cities.filter( city => {
  console.log( city.charAt(-1) )
  return city.endsWith("n")
})
console.log(withoutVowels)
console.log(filteredCities)
let ninetysBestSongs = [
  "1994 Blind",
  "1992 Walk",
  "1994 Davidian",
  "1991 Killig in the Name",
  "1996 Roots Bloody Roots",
  "1991 Sad But True",
  "1994 Closer",
  "1994 Black Hole Sun",
  "1999 Slipknot",
  "1991 Smeels Like Teen Spirit"
]
/*Se cuenta esta colección de canciones. Los objetivos a cumplir son los siguientes:
Mostrar una lista con únicamente las cancioens, sin el año de lanzamiento
Mostrar una lista con aquellas canciones cuyo año de lanzamiento fue después de 1995
Moostrar una lista en la que aparezcan sólo los últimos dos dígitos del año de lanzamiento y el nombre de la canción (P.E. '94 Blind)
*/
/*
let newArray1 = ninetysBestSongs.map( song => {
  let shortSong = song.substr(0, 4) 
  return shortSong
})
let newArray2 = ninetysBestSongs.map( song => {
  return song.substr(0, 4) 
})
let newArray3 = ninetysBestSongs.map( song => song.substr(0, 4))
console.log(newArray1)
console.log(newArray2)
let cajaDeCosasLimpias = cajaDeCosasSucias.map( cosaSucia => {
  return cosaSucia.limpiar() 
})
objeto = {
  name:"Trompo",
  isClean:false
}
*/
let bandsArray = [
  "Kamelot",
  "Judas Priest",
  "Cradle of Filth",
  "Iron Maiden",
  "Megadeth",
  "Helloween"
]
/*Crear una nueva lista con todas las bandas cuyo nombre tenga más de una palabra*/
let shortNames = bandsArray.filter( band => {
  console.log(band.includes(" "))
  return band.includes(" ")
})
console.log("shortNames ", shortNames)
/*Crear una nueva lista que contenga un string con las letras pares las bandas*/
let weirdNames = bandsArray.map( band => {
  let pairs = band.split("")
  /* 
      input: Kamelot
      output: [
          0:"K",
          1:"a",
          2:"m",
          3:"e",
          4:"l",
          5:"o",
          6:"t"
      ]
   */
  let pairLetters = pairs.filter( (letter,index) => {
      return index % 2 === 0
      /*
      output: [
          0:"K",
          1:"m",
          2:"l",
          3:"t"
      ]*/
  })
  return pairLetters.join("")
  /*
      input:[
          0:"K",
          1:"m",
          2:"l",
          3:"t"
      ]
      output: "Kmlt"*/
} )
let weirdNames2 = bandsArray.map( band => band.split("").filter( (letter, index) => index % 2 === 0 ).join(""))
console.log(weirdNames)
console.log(weirdNames2)
let numbersArray = [
  2,
  8,
  4,
  6,
  8,
  9,
  2,
  1,
  5
]
let lettersArray =
["m", "o", "r", "n", "i", "n", "g"]
/*teniendo numbersArray, obtener el resultado de sumar cada uno de los elementos del array*/
let resultado = 0;
numbersArray.forEach( number => {
  resultado = resultado + number
})
console.log("resultado: " ,resultado)
/*reduciendo números*/
let additionResult = numbersArray.reduce( (acumulador, number) => {
  return acumulador + number
},0)
console.log("resultado de reduce ", additionResult)
/*reduciendo strings*/ 
let fullWord = lettersArray.reduce( (accum, letter ) => {
  return accum + letter
},"")
console.log(fullWord)
