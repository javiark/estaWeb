var globalID = 0

function cardChange(id){
    globalID = id
    console.log(id)
    const contenedor = document.getElementById(id)
    const img = document.getElementById("imageNew")
    const div = document.getElementById("imageHide")

    img.classList.remove("show")
    img.classList.add("hide")
    div.classList.remove("hide")
    div.classList.add("show")
}

function resetCard(id) {
    const contenedor = document.getElementById(id)
    const img = contenedor.querySelector('img')
    const div = contenedor.querySelector('div')

    img.classList.toggle("show")
    img.classList.toggle("hide")
    div.classList.toggle("hide")
    div.classList.toggle("show")
}

//-----------titulos----------//
var globalID1 = 0

function cardTitle(id1){
    globalID1 = id1
    console.log(id1)
    const contenedor = document.getElementById(id1)
    const img = document.getElementById("titleNew")
    const div = document.getElementById("titleHide")

    img.classList.remove("show")
    img.classList.add("hide")
    div.classList.remove("hide")
    div.classList.add("show")
}

function resetCard(id) {
    const contenedor = document.getElementById(id)
    const img = contenedor.querySelector('img')
    const div = contenedor.querySelector('div')

    img.classList.toggle("show")
    img.classList.toggle("hide")
    div.classList.toggle("hide")
    div.classList.toggle("show")
}