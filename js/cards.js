//-----lista de cards-----//

const obras = [
    {
        id: 1,
        name: "Obras Nuevas",
        img: "./assets/images/Obras/ObraNueva/obraNuevaC.jpg"
    },
    {
        id: 2,
        name: "Comercial",
        img: "./assets/images/Obras/Locales Comerciales/localesComerciales.jpg"
    }
    ,

    {
        id: 4,
        name: "Reformas",
        img: "./assets/images/Obras/Reformas/reformas.jpg"
    }
    ,
    {
        id: 5,
        name: "Amplaciones",
        img: "./assets/images/Obras/Amplaciones/expansion.jpg"
    }
    ,
    {
        id: 6,
        name: "Edificios",
        img: "./assets/images/Obras/Edificios/edificios.jpg"
    }
    ,
    {
        id: 7,
        name: "Renders",
        img: "./assets/images/Obras/En proceso/enProceso.jpg"}

    
]

//-----renderizar cards-----//

let card = document.getElementById("card-template")

function renderizarObras(obras) {
    card.innerHTML = ``;

    obras.map((x) => {
        card.innerHTML += `
 
        <div class="card">
              <a id="${x.id}" onmouseover="titleShow(${x.id})" onmouseout="resetTitle(${x.id})" class="card__imgCont" href="/pages/areas/${x.name}.html">
                 <img src="${x.img}" alt="${x.name}" class="card__img" id="${x.id}">
                 <p class="card__textInside" id="textInside">${x.name}</p>
                </a>
        </div>

    `;
    });
}

renderizarObras(obras)

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