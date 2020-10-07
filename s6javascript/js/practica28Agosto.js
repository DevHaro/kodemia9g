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