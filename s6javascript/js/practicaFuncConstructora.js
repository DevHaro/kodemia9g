// year
// brand
// model
// doors

let carsData = [
  [
      "1999",
      "Volkswagen",
      "Sedan",
      "4"
  ],
  [
      "1967",
      "Ford",
      "Mustang",
      "2"
  ],
  [
      "2020",
      "Dodge",
      "Viper",
      "2"
  ]
]

function Car( year, brand, model, doors){
  this.year = year;
  this.brand = brand;
  this.model = model;
  this.doors = doors;
}

// let carsCollection = carsData.map( car => {
//   let year = car[0]
//   let brand = car[1]
//   let model = car[2]
//   let doors = car[3]

//   return new Cars( year, brand, model, doors)
// })

let reduceCars = carsData.reduce( ( accum, current) => {
  // deconstruccion de objeto array
  let [year, brand, model, doors] = current
  // console.log(year, brand, model, doors)
  // let year = current[0]
  // let brand = current[1]
  // let model = current[2]
  // let doors = current[3]
  return [...accum, new Car(year, brand, model, doors)]
},[])

console.log(reduceCars)

