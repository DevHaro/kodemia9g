class Koder {
    constructor( number, name, lastName, generation) {
        this.number = number;
        this.name = name;
        this.lastName = lastName;
        this.generation = generation;
    }
}

class UI {
    addKoder(koder) {
        // document.getElementById('tbodyKoders').innerHTML = ""
        let {number, name, lastName, generation} = koder        
        let listTr = document.createElement('tr')
        let idNumberTd = document.createElement('td')
        let idNumberText = document.createTextNode(number)
        idNumberTd.appendChild(idNumberText)
        listTr.appendChild(idNumberTd)
        
        let nameTd = document.createElement('td')
        let nameText = document.createTextNode(name)
        nameTd.appendChild(nameText)
        listTr.appendChild(nameTd)
            
        let lastNameTd = document.createElement('td')
        let lastNameText = document.createTextNode(lastName)
        lastNameTd.appendChild(lastNameText)
        listTr.appendChild(lastNameTd)
    
        let generationTd = document.createElement('td')
        let generationText = document.createTextNode(generation)
        generationTd.appendChild(generationText)
        listTr.appendChild(generationTd)

        let buttonTd = document.createElement('td')
        let buttonBtnTd = document.createElement('button')    
        // buttonBtnTd.setAttribute('class','close')                
        buttonBtnTd.setAttribute('id','close')
        buttonBtnTd.setAttribute('name','delete')
        let buttonX = document.createTextNode('X')
        buttonBtnTd.appendChild(buttonX)
        
        buttonTd.appendChild(buttonBtnTd)    
        listTr.appendChild(buttonTd)        

        document.getElementById('tbodyKoders').appendChild(listTr)          
    }

    resetForm() {
        document.getElementById('koder-form').reset()
    }

    deleteKoder(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove()
        }
    }

    showMessage() {

    }
}

let number = 1

// DOM Events
document.getElementById("save-button").addEventListener("click", () =>{     
    const name = document.getElementById('item-name').
    value
    const lastName = document.getElementById('item-lastName').value
    const generation = document.getElementById('item-category').value

    const koder =new Koder( number, name, lastName, generation)

    const ui = new UI()

    ui.addKoder(koder)
    ui.resetForm()

    // console.log(`${number} ${name} ${lastName} ${generation}`)

    number++
})

document.getElementById('tbodyKoders').addEventListener('click', function(e) {
    const ui = new UI
    ui.deleteKoder(e.target)    
})