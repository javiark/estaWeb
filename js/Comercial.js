//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "Abasto",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/abasto/1.jpg"
    },
    {
        id: 2,
        name: "BAD",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/BAD/1.jpg"
    },
    {
        id: 3,
        name: "Corrientes",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/corrientes/1.jpg"
    },
    {
        id: 4,
        name: "Gurruchaga",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/gurruchaga/1.jpg"
    },
    {
        id: 5,
        name: "Recoleta",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/recoleta/1.jpg"
    },
    {
        id: 6,
        name: "San Miguel",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/san miguel/1.jpg"
    },
    {
        id: 7,
        name: "Santa Fe",
        img: "/assets/images/Obras1/Locales Comerciales/nordika/Santafe1/1.jpg"
    },
    {
        id: 8,
        name: "Selema",
        img: "/assets/images/Obras1/Locales Comerciales/Selema/1.jpg"
    },
    {
        id: 10,
        name: "HSBC",
        img: "/assets/images/Obras1/Locales Comerciales/Stands/hsbc/1.jpg"
    },
    {
        id: 11,
        name: "Jeep",
        img: "/assets/images/Obras1/Locales Comerciales/Stands/jeep/1.jpg"
    },
    {
        id: 12,
        name: "Almacen",
        img: "/assets/images/Obras1/Locales Comerciales/Almacen/1.jpg"
    },
    {
        id: 13,
        name: "La Unica",
        img: "/assets/images/Obras1/Locales Comerciales/LaUnica/1.jpg"
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


