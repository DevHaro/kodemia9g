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

  input  Guadalajara
  output Gdljr
  
  3. Crear un nuevo array que contenga unicamente las ciudades que terminen con n*/

/*
arrayPlaces = [
  'Guadalajara',
  'Monterrey', 
  'Nuevo León',
  'Guanajuato',
  'CDMX',
  'Temascalapa',
  'Toluca',
  'Playa del Carmen',
  'Chiapas',
  'Michoacan'
]

arrayPlaces.forEach(place => {
  console.log(place + ', ' + place.substring(0,3).toUpperCase())
}); 

arrayPlaces.forEach(item => {
  console.log(item.replace(/[aeiouáéíóú]/ig,''));
})



let placesEndsN = arrayPlaces.filter(placesEndsN => placesEndsN.endsWith("n"))

console.log(placesEndsN)

// console.log(arrayMexico) */


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

