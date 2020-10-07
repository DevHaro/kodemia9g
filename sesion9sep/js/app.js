// $(document).ready(function() {
//     // sentences
//     console.log('ready')
//     // $('#list').hide()
//     $('#list').append('<li>2</li>')
//     $('#list').addClass('koder')    
//     $('#list').prepend('<li>0</li>')
// })

// $(document).ready(function() {
//     console.log('ready')
//     $('div').addClass('list')
//     $('li').addClass('list__item')
    // setters
    // $('selector').attr('class')
    // Métodos jQuery
    // .append()
    // .appendTo()
    // .html()
    // .prepend()
    // Agregar elementos al inicio de un mismo selector 
    // .prependTo()
    // .text()
    // Agregar texto a un elemento
    // .css()
    // Agregar 
// }) 


$(document).ready(function() { 

// 1. Crear un elemento “ul” con 4 items “li” dentro, y con jQuery agregarles 10 items al final de la lista ( .append() )
for (let i = 0; i < 10; i++) {
    $('ul').append('<li>item</li>')    
}

// 2. Crear un elemento “ol” con 4 items “li” dentro, y con jQuery agregarles 10 items al inicio de la lista ( .prepend() )
for (let j = 0; j < 10; j++) {
    $('ol').prepend('<li>item</li>')
}

// 3. Crear un elemento “div” con la clase “content” y con jQuery agregarle dentro un Parrafo con el texto “Hola Koder” (.html())
    $('.content').html('<p>Hola Koder</p>')

// 4. Agregar estilos al “div” con la clase “content” un color de fondo #333 (.css )
    $('div').css("background-color","#333")

// 5. Agregar un elemento h1 al inicio del body “<h1>Empty</h1>” y cambiar el Texto por “Aprendiendo jQuery” (.text )
    $('h1').text('Aprendiendo jQuery')
    // $('h1').hide()
})

