document.getElementById("save-button").addEventListener("click", () => {
    console.log("Click");
    let name = document.getElementById("name").value
    let lastName = document.getElementById("last-name").value
    let book = document.getElementById("book").value
    let characterObject = { name, lastName, book }
    console.log(characterObject)
    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if ( this.readyState == 4 && this.status == 400){
            alert("debes stringyficar tu objeto")
        }
        if (this.readyState == 4 && this.status == 200) { /*petición completa y correcta*/
           console.log(this.responseText)  /*cachamos la respuesta del servidor*/
           getCharacters()
        }
    };
    http.open("POST", "https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json");
    http.send(JSON.stringify(characterObject));
})
const printTable = ( character ) => {
    let { name, lastName, book } = character
    let characterRow = document.createElement("tr")
    let nameCell = document.createElement("td")
    let bookCell = document.createElement("td")
    let buttonCell = document.createElement("td")
    let deleteButton = document.createElement("button")
    let nameText = document.createTextNode(`${name} ${lastName}`)
    let bookText = document.createTextNode(book)
    let buttonText = document.createTextNode("Eliminar")
    nameCell.appendChild(nameText)
    bookCell.appendChild(bookText)
    deleteButton.appendChild(buttonText)
    buttonCell.appendChild(deleteButton)
    characterRow.appendChild(nameCell)
    characterRow.appendChild(bookCell)
    characterRow.appendChild(buttonCell)
    document.getElementById("characters-table").append(characterRow)
}
const getCharacters = () => {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { /*petición completa y correcta*/
           console.log(this.responseText)  /*cachamos la respuesta del servidor*/
           console.log(typeof this.responseText)  
           let characters = JSON.parse(this.responseText)
           console.log(characters)
           console.log(typeof characters)
           document.getElementById("characters-table").innerHTML = ""
           for( character in characters ){
               printTable(characters[character])
           }
        }
    };
    http.open("GET", "https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json")
    http.send()
}
getCharacters() 
/*https://ajaxclass9g.firebaseio.com/ravenclaw/.json*/