import "bootstrap/dist/css/bootstrap.css"

var globalID = 0

function cardChange(id) {
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

function cardTitle(id1) {
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


var globalID = 0

function cardChange(id) {
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


//-----aparecer titulo-----//

var titleId = 0

function titleShow(id1) {
    titleId = id1
    console.log(id1)
    console.log("mostrar")
    const textInside = document.getElementById(id1)


    const img1 = textInside.querySelector('img')
    const p = textInside.querySelector('p')
    console.log(p)



    img1.classList.add("greyOut")
    // p.classList.remove("hide")
    p.classList.add("show1")


}

function resetTitle(id1) {
    titleId = id1
    console.log(id1)
    console.log("borrar")
    const textInside = document.getElementById(id1)

    const img1 = textInside.querySelector('img')
    const p = textInside.querySelector('p')
    console.log(p)

    img1.classList.remove("greyOut")
    // p.classList.add("hide")
    p.classList.remove("show1")

}

//-----------array objetos----------//






