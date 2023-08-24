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