//-----lista de cards-----//

const obrasNueva = [
    {
        id: 1,
        name: "Casa SB3",
        img: "./public/assets/images/Casa1.jpg"
    },
    {
        id: 2,
        name: "Comercial",
        img: "./assets/images/Obras/Locales Comerciales/localesComerciales.jpg"
    }
    ,
    {
        id: 3,
        name: "Mobiliario",
        img: "./assets/images/Obras/Mobiliario/mobiliario.jpg"
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
        name: "Concursos",
        img: "./assets/images/Obras/Concursos/Conc1.jpg"
    }

    
]

//-----renderizar cards-----//

let card1 = document.getElementById("card-template1")

obrasNueva.map((x) => {
    card1.innerHTML += `
 
        <div class="card">
              <a id="${x.id}" onmouseover="titleShow(${x.id})" onmouseout="resetTitle(${x.id})" class="card__imgCont" href="/pages/obras/${x.name}.html">
                 <img src="${x.img}" alt="${x.name}" class="card__img" id="${x.id}">
                 <p class="card__textInside" id="textInside">${x.name}</p>
                </a>
        </div>

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