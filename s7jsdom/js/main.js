/* * Solicitar al usuario cuantos koder desea registrar
 * solicitar el nombre de cada Koder
 * Generar un objeto de tipo Koder con las propiedades name y lastName
 * Generar un array y generar un lista ordenada con cada uno de los nombres Koder */

function Koder(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

const kodersQuantity = parseInt(prompt('Cantidad de Koders a registrar:'))

let kodersArray = []

for (let i = 0; i < kodersQuantity; i++) {
    let name = prompt(`Ingresa el nombre del koder ${i + 1}`)
    let lastName = prompt(`Ìngresa el apellido del koder ${i + 1}`)
    let newKoder = new Koder(name, lastName)
    kodersArray.push(newKoder)
}

console.log(kodersArray)

let elementOl = document.createElement('ol')

kodersArray.forEach((koder) =>{
    let li = document.createElement('li')
    let textName = document.createTextNode(`${koder.name} ${koder.lastName}`)
    li.appendChild(textName)
    elementOl.appendChild(li)
    document.body.appendChild(elementOl)
})