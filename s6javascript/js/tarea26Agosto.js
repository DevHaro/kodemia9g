/*Se cuenta esta colección de canciones. Los objetivos a cumplir son los siguientes:
1. Mostrar una lista con únicamente las canciones, sin el año de lanzamiento
2. Mostrar una lista con aquellas canciones cuyo año de lanzamiento fue después de 1995
3. Mostrar una lista en la que aparezcan sólo los últimos dos dígitos del año de lanzamiento y el nombre de la canción (P.E. '94 Blind)
*/

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

// // 1. Lista con únicamente las canciones, sin el año de lanzamiento
ninetysBestSongs.forEach( song => console.log(song.substr(5)))
  
// // 2. Lista con aquellas canciones cuyo año de lanzamiento fue después de 1995
let post1995 = ninetysBestSongs.filter( song => {
   let year = song.substr(0, 4)
   return year > 1995
 })
console.log(post1995)

// 3. Lista en la que aparezcan sólo los últimos dos dígitos del año de lanzamiento y el nombre de la canción (P.E. '94 Blind)
let digitsName = ninetysBestSongs.map( song => `'${song.substr(2)}`)
console.log(digitsName)

