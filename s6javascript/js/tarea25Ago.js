// 1.- Registro de koders:
//     -Pedir al usuario la cantidad de koders a registrar
//     -Pedir al usuario los nombres de cada koder que desee registrar
//     -almacenar los nombres de los koders en una colección
//     -imprimir en consola únicamente las inciales de los koders registrados
//         input:  Israel Salinas Martínez
//         output: I. S. M.
// 2.- Usando la colección creada en el ejercicio anterior:
//     -Obener una nueva colección que contenga el nombre de cada koder registrado, y la cantidad de caracteres que contiene su nombre
//         input: Israel Salinas Martínez
//         output: Israel Salinas Martínez, 23 caracteres
// 3.- Usando la colección creada en el ejercicio 1:
//     -Obtener una nueva colección que contenga únicamente los nombres de los koders que tengan más de 30 caracteres
//     -imprimir en consola la colección filtrada

*palabra reservada function, nombre de la función, ( parámetros ) { contenido de la función }*/
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