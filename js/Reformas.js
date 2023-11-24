//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "Avellaneda",
        img: "/assets/images/Obras1/Reformas/Avellaneda/1.jpg"
    },
    {
        id: 2,
        name: "Cocina Floresta",
        img: "/assets/images/Obras1/Reformas/CocinaFloresta/4.jpg"},
    {
        id: 3,
        name: "Cocina Conesa ",
        img: "/assets/images/Obras1/Reformas/ConesaCocina/1.jpg"
    },
    ,
    {
        id: 4,
        name: "Constitucion",
        img: "/assets/images/Obras1/Reformas/Constitucion/1.jpg"
    },
    {
        id: 5,
        name: "Gaona",
        img: "/assets/images/Obras1/Reformas/Gaona/1.jpg"
    },
    {
        id: 6,
        name: "Arenales Cocina",
        img: "/assets/images/Obras1/Reformas/ArenalesCocina/1.jpg"
    },
    {
        id: 7,
        name: "Baño Melo",
        img: "/assets/images/Obras1/Reformas/Melo/1.jpg"
    },
    {
        id: 8,
        name: "Neuquen",
        img: "/assets/images/Obras1/Reformas/Neuquen/1.jpg"
    },
    {
        id: 9,
        name: "Villa Luro",
        img: "/assets/images/Obras1/Reformas/VLuro/1.jpg"
    },
    {
        id: 10,
        name: "Oficina",
        img: "/assets/images/Obras1/Reformas/Oficina/1.jpg"
    },
    {
        id: 11,
        name: "Ñandutí",
        img: "/assets/images/Obras1/Reformas/Ñandutí/1.jpg"
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


