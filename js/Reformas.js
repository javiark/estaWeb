//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "Avellaneda",
        img: "/assets/images/Obras/Reformas/Avellaneda/Avellaneda.jpg"
    },
    {
        id: 2,
        name: "Cocina Floresta",
        img: "/assets/images/Obras/Reformas/CocinaFloresta/CocinaFloresta.jpg"},
    {
        id: 3,
        name: "Conesa Cocina",
        img: "/assets/images/Obras/Reformas/ConesaCocina/ConesaCocina.jpg"
    },
    ,
    {
        id: 4,
        name: "Cocina",
        img: "/assets/images/Obras/Reformas/Dept1/depto.jpg"
    },
    {
        id: 5,
        name: "Baño Melo",
        img: "/assets/images/Obras/Reformas/Melo/Melo3.jpg"
    },
    {
        id: 6,
        name: "Ñandutí",
        img: "/assets/images/Obras/Reformas/Ñandutí/Ñandutí.jpg"
    },
    {
        id: 7,
        name: "Oficina",
        img: "/assets/images/Obras/Reformas/Oficina/Oficina.jpg"
    },
    {
        id: 8,
        name: "Quincho Limonero",
        img: "/assets/images/Obras/Reformas/QuinchoLimonero/QuinchoLimonero.jpg"
    },
    {
        id: 9,
        name: "Constitucion",
        img: "/assets/images/Obras/Reformas/Constitucion/Constitucion.jpg"
    },
    {
        id: 10,
        name: "Remodelacion",
        img: "/assets/images/Obras/Reformas/Remodelación de Casa/Remodelacion.jpg"
    },


    
]

//-----renderizar cards-----//

let card1 = document.getElementById("card-template1")


amplaciones.map((x1) => {
    card1.innerHTML += `
 
    <div class="card">
          <a id="${x1.id}" onmouseover="titleShow(${x1.id})" onmouseout="resetTitle(${x1.id})" class="card__imgCont" href="/pages/obras/${x1.name}.html">
             <img src="${x1.img}" alt="${x1.name}" class="card__imgC" id="${x1.id}">
             <p class="card__textInside" id="textInside">${x1.name}</p>
            </a>
    </div>

`;
});

//-----aparecer y desaparecer en cards-----//

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


