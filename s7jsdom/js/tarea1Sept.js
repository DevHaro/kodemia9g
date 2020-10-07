/* Práctica:
  A partir del arreglo llamado productionArray de las clases anteriores en el que generamos un array de objetos de tipo Worker con su método getAverage()
  Crear y mostrar la informacion (name, producción por dia, y el promedio) de cada uno de los Wokers en una tabla
  mediante los métodos del DOM.  */

let productionArray = [
    [
        "David Moranchel",
        "Lunes: 100pz",
        "Martes: 85pz",
        "Miércoles: 70pz",
        "Jueves: 96pz",
        "Viernes: 120pz",
    ],[
        "Michael Villalba",
        "Lunes: 123pz",
        "Martes: 94pz",
        "Miércoles: 100pz",
        "Jueves: 74pz",
        "Viernes: 81pz",
    ],
    [
        "Charles Silva",
        "Lunes: 120",
        "Martes: 76pz",
        "Miércoles: 86pz",
        "Jueves: 95pz",
        "Viernes: 100pz",
    ],[
        "Israel Salinas",
        "Lunes: 90pz",
        "Martes: 85pz",
        "Miércoles: 93pz",
        "Jueves: 121pz",
        "Viernes: 72pz",
    ],  
  ]
  
  function Collaborator( name, monday, tuesday, wednesday, thursday, friday ){ 
    this.name = name;
    this.production = [monday, tuesday, wednesday, thursday, friday];
    this.getAverage = function(){    
    let average = this.production.reduce( ( accum, current ) => {    
      current.replace("pz", "");
      return accum + parseInt(current.split(": ")[1])                     
    },0) / this.production.length
    console.log(`El promedio de ${name} es: ${average} pzas`);    
    }
  }
  
  let collaboratorArray = productionArray.map( production => {
    let[name, monday, tuesday, wednesday, thursday, friday] = production
    return new Collaborator(name, monday, tuesday, wednesday, thursday, friday)
  })
  
  console.log(collaboratorArray)
  
  collaboratorArray.forEach( item => {
     item.getAverage()

  })  


let elementOl = document.createElement('ol')

collaboratorArray.forEach( worker => {
  console.log(worker)  
  console.log(worker.production)
  let values = Object.values(worker.production)
  console.log(values)
  let average = values.reduce( (total, current) => {
    return total + parseInt(current.split(": ")[1])
  },0 ) /values.length
})

console.log(collaboratorArray)