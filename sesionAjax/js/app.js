// la práctica:

// con base en el formulario que ya creamos, crear de igual forma el objeto Koder, pero esta vez guardarlo en la url que les proporcionamos (  https://ajaxclass9g.firebaseio.com/{nombre_del_equipo}/.json )

// una vez que logremos guardar koders en nuestro enpoint, extraer los datos de ese endpoint y usar los datos que entrega para pintar la tabla que muestre los koders que hemos guardado

// function reqListener () {
//     console.log(this.responseText);
//   }
//   var http = new XMLHttpRequest();
//   http.addEventListener("load", reqListener);
//   http.open("GET", "https://dixketl.com/ajax/datos.php");
  // http.send();

function imprimir() {
    console.log(this.responseText);
}

// var data = new FormData();
// data.append("nombre", "José");
// data.append("apellido", "Haro");
var data = {nombre:"Martin",apellido:"Thompson"}

var http = new XMLHttpRequest();
http.addEventListener("load", imprimir);
http.open("PUT", "https://ajaxclass9g.firebaseio.com/-MGfdGlH9vepnNxzA9ez/.json");
data = JSON.stringify(data);
http.send(data);