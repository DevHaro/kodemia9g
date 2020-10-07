let scoresArray = [
  [
      "David Moranchel",
      "Español: 8",
      "Matemáticas: 9",
      "Geografía: 10",
      "Ciencias Naturales: 8",
      "Física: 9",
      "Química: 7"
  ],
  [
      "Charles Silva",
      "Español: 10",
      "Matemáticas: 10",
      "Geografía: 8",
      "Ciencias Naturales: 7",
      "Física: 9",
      "Química: 8"
  ],
  [
      "Michael Villalba",
      "Español: 9",
      "Matemáticas: 9",
      "Geografía: 7",
      "Ciencias Naturales: 9",
      "Física: 9",
      "Química: 10"
  ],
  [
      "Israel Salinas",
      "Español: 10",
      "Matemáticas: 10",
      "Geografía: 7",
      "Ciencias Naturales: 8",
      "Física: 9",
      "Química: 7"
  ],
  [
      "Aaron Barcenas",
      "Español: 10",
      "Matemáticas: 10",
      "Geografía: 10",
      "Ciencias Naturales: 10",
      "Física: 10",
      "Química: 10"
  ] 
]
/* crear una función constructora para crear estudiantes. Cada estudiante debe tener la propiedad name, y una propiedad para almacenar la calificación de cada una de las materias que aparecen en el array. También cada estudiante debe tener un método que obtenga el promedio general de cada estudiante, y que muestre el nombre del estudiante y su promedio en un mensaje de consola.*/
/*
function Student( name, spanish, maths, geography, nats, physics, chemistry ){
  this.name = name;
  this.spanish = spanish;
  this.maths = maths;
  this.geography = geography;
  this.nats = nats;
  this.physics = physics;
  this.chemistry = chemistry;
  this.getAverage = function(){
      let spanishScore = parseInt(this.spanish.split(": ")[1])
      let mathsScore = parseInt(this.maths.split(": ")[1])
      let geographyScore = parseInt(this.geography.split(": ")[1])
      let natsScore = parseInt(this.nats.split(": ")[1])
      let physicsScore = parseInt(this.physics.split(": ")[1])
      let chemistryScore = parseInt(this.chemistry.split(": ")[1])
      let average =( spanishScore + mathsScore + geographyScore + natsScore + physicsScore + chemistryScore ) / 6
      console.log(`soy ${this.name} y mi promedio es de ${average}`)
  }
}*/

function Student( name, spanish, maths, geography, nats, physics, chemistry ){
  this.name = name;
  this.scores = [ spanish, maths, geography, nats, physics, chemistry]
  this.getAverage = function(){
      let average = this.scores.reduce( ( accum, current ) => {
          return accum + parseInt(current.split(": ")[1])
      },0) / scores.length
      console.log(`soy ${this.name} y mi promedio es de ${average.toFixed(2)}`)
  }
}
let studentsArray = scoresArray.map( score => {
  let [ name, spanish, maths, geography, nats, physics, chemistry ] = score;
  return new Student( name, spanish, maths, geography, nats, physics, chemistry)
})
console.log(studentsArray)
studentsArray.forEach( student => {
  student.getAverage()
})


// let scoresArray = [
//   [
//       "David Moranchel",
//       "Español: 8",
//       "Matemáticas: 9",
//       "Geografía: 10",
//       "Ciencias Naturales: 8",
//       "Física: 9",
//       "Química: 7"
//   ],
//   [
//       "Charles Silva",
//       "Español: 10",
//       "Matemáticas: 10",
//       "Geografía: 8",
//       "Ciencias Naturales: 7",
//       "Física: 9",
//       "Química: 8"
//   ],
//   [
//       "Michael Villalba",
//       "Español: 9",
//       "Matemáticas: 9",
//       "Geografía: 7",
//       "Ciencias Naturales: 9",
//       "Física: 9",
//       "Química: 10"
//   ],
//   [
//       "Israel Salinas",
//       "Español: 10",
//       "Matemáticas: 10",
//       "Geografía: 7",
//       "Ciencias Naturales: 8",
//       "Física: 9",
//       "Química: 7"
//   ]
// ]
// /* crear una función constructora para crear estudiantes. Cada estudiante debe tener la propiedad name, y una propiedad para almacenar la calificación de cada una de las materias que aparecen en el array. También cada estudiante debe tener un método que obtenga el promedio general de cada estudiante, y que muestre el nombre del estudiante y su promedio en un mensaje de consola.*/


// function Student(name, spanish, math, geo, natural, physical, chemistry) {
//   this.name = name;
//   this.spanish = spanish;
//   this.math = math;
//   this.geo = geo;
//   this.natural = natural;
//   this.physical = physical;
//   this.chemistry = chemistry;
//   this.average = function(){
//     let prom = ((spanish+math+geo+natural+physical+chemistry)/6).toFixed(2)
//     console.log(`Soy ${name}, mi promedio es: ${prom}` )
//   } 
// }

// let studentsCollection = scoresArray.map( data => {  
//   let regex = /(\d+)/g;
//   let name = data[0]
//   let spanish = parseInt(data[1].match(regex))
//   let math = parseInt(data[2].match(regex))    
//   let geo = parseInt(data[3].match(regex))
//   let natural = parseInt(data[4].match(regex))
//   let physical = parseInt(data[5].match(regex))
//   let chemistry = parseInt(data[6].match(regex))        
//   // let average = (spanish+math+geo+natural+physical+chemistry)/6     
//   // console.log(average)    
//   return new Student(name, spanish, math, geo, natural, physical, chemistry)      
// })

// studentsCollection.forEach( student => {
//   student.average()
// })