const workersArray = [
    {
        name: "Israel Salinas Martínez",
        productivity: {
            monday: "20pz",
            tuesday: "30pz",
            wednesday: "50pz",
            thursday: "15pz",
            friday: "25pz"
        }
    },
    {
        name: "David Moranchel",
        productivity: {
            monday: "30pz",
            tuesday: "35pz",
            wednesday: "5pz",
            thursday: "10pz",
            friday: "5pz"
        }
    },
    {
        name: "Carlos Silva",
        productivity: {
            monday: "30pz",
            tuesday: "35pz",
            wednesday: "20pz",
            thursday: "40pz",
            friday: "20pz"
        }
    }
]


const workersNewArray = []

workersArray.forEach( worker => {
    let values = Object.values(worker.productivity)
    let average = values.reduce( ( total, current ) =>{
        return total + parseInt(current)
    },0) / values.length
    console.log(average)

    let names = Object.values(worker.name).join().replace(/,/g,"")

    workersNewArray.push([names,average])
});

workersNewArray.forEach(worker => {
    // if( worker[1] < 25 ) {
    //     console.log(worker[1])
    //     let liItem = document.createElement('li')
    //     let liText = document.createTextNode(`${worker[0]}`)
    //     liItem.appendChild(liText)

    //     document.getElementById("red-list").appendChild(liItem)
    // } else {
    //     console.log(worker[1])
    //     let liItem = document.createElement('li')
    //     let liText = document.createTextNode(`${worker[0]}`)
    //     liItem.appendChild(liText)

    //     document.getElementById("green-list").appendChild(liItem)
    // }
    let iterator = ""
    if (worker[1]<=25) {
        iterator = "menor"
    } else {
        iterator = "mayor"
    }
    
    
    console.log(iterator)
    switch (iterator) {
        case "menor":
            console.log(worker[1])
            var liItem = document.createElement('li')
            var liText = document.createTextNode(`${worker[0]}`)
            liItem.appendChild(liText)

            document.getElementById("red-list").appendChild(liItem)
            
            break;
        case "mayor":
            console.log(worker[1])            
            var liItem = document.createElement('li')
            var liText = document.createTextNode(`${worker[0]}`)
            liItem.appendChild(liText)

            document.getElementById("green-list").appendChild(liItem)
            break;

        default:
            console.log("entra a default")
            console.log("default")
            break;
    }
});