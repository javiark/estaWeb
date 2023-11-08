//-----lista de cards-----//

const obras = [
    {
        id: 1,
        name: "Obras Nuevas",
        img: "./assets/images/Obras/ObraNueva/obraNuevaC.jpg"
    },
    {
        id: 2,
        name: "Locales Comerciales",
        img: "./assets/images/Obras/Locales Comerciales/localesComerciales.jpg"
    }
]

//-----renderizar cards-----//

let card = document.getElementById("card-template")

obras.map((x) => {
    card.innerHTML += `
    <section class="card__header">
        <div id="${x.id}" onmouseover="titleShow(${x.id})" onmouseout="resetTitle(${x.id})" class="contenedorImagen">
            <img src="${x.img}" alt="${x.name}" class="card__img" id="${x.id}">
            <p class="card__textInside" id="textInside">${x.name}</p>
        </div>
</section>
    `;
});

//-----aparecer y desaparecer en cards-----//


var titleId = 0

function titleShow(id) {
    titleId = id
    console.log(id )
    console.log("mostrar")
    const textInside = document.getElementById(id)


    const img1 = textInside.querySelector('img')
    const p = textInside.querySelector('p')
    console.log(p)



    img1.classList.add("greyOut")
    // p.classList.remove("hide")
    p.classList.add("show1")


}

function resetTitle(id) {
    titleId = id
    console.log(id)
    console.log("borrar")
    const textInside = document.getElementById(id)

    const img1 = textInside.querySelector('img')
    const p = textInside.querySelector('p')
    console.log(p)

    img1.classList.remove("greyOut")
    // p.classList.add("hide")
    p.classList.remove("show1")

}