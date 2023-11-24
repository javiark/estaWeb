//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "Casa Pilar",
        img: "/assets/images/Obras1/ObraNueva/CasaPilar/1 (1).jpg"
    },
    {
        id: 2,
        name: "Huespedes",
        img: "/assets/images/Obras1/ObraNueva/Cesmeralda/casaDeHuespedes/5.jpg"
    },
    {
        id: 3,
        name: "C Esmeralda",
        img: "/assets/images/Obras1/ObraNueva/Cesmeralda/Grande/Fondo2.jpg"
    },
    {
        id: 4,
        name: "Maschwitz",
        img: "/assets/images/Obras1/ObraNueva/Maschwitz/FB_IMG_13638006152578622.jpg"
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
