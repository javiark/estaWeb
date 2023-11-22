//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "ext (1)",
        img: "/assets/images/Renders/exteriores/ext (1).jpg"
    },
    {
        id: 2,
        name: "ext (2)",
        img: "/assets/images/Renders/exteriores/ext (2).jpg"
    },
    {
        id: 3,
        name: "ext (3)",
        img: "/assets/images/Renders/exteriores/ext (3).jpg"
    },
    {
        id: 4,
        name: "ext (4)",
        img: "/assets/images/Renders/exteriores/ext (4).jpg"
    },
    {
        id: 5,
        name: "ext (5)",
        img: "/assets/images/Renders/exteriores/ext (5).jpg"
    },
    {
        id: 6,
        name: "ext (6)",
        img: "/assets/images/Renders/exteriores/ext (6).jpg"
    },
    {
        id: 7,
        name: "ext (7)",
        img: "/assets/images/Renders/exteriores/ext (7).jpg"
    },
    {
        id: 8,
        name: "ext (8)",
        img: "/assets/images/Renders/exteriores/ext (8).jpg"
    },
    {
        id: 9,
        name: "ext (9)",
        img: "/assets/images/Renders/exteriores/ext (9).jpg"
    },
    {
        id: 10,
        name: "ext (10)",
        img: "/assets/images/Renders/exteriores/ext (10).jpg"
    },
    {
        id: 11,
        name: "ext (11)",
        img: "/assets/images/Renders/exteriores/ext (11).jpg"
    },
    {
        id: 12,
        name: "ext (12)",
        img: "/assets/images/Renders/exteriores/ext (12).jpg"
    },
    {
        id: 13,
        name: "ext (13)",
        img: "/assets/images/Renders/exteriores/ext (13).jpg"
    },
    {
        id: 14,
        name: "ext (14)",
        img: "/assets/images/Renders/exteriores/ext (14).jpg"
    },
    {
        id: 15,
        name: "ext (15)",
        img: "/assets/images/Renders/exteriores/ext (15).jpg"
    },
    {
        id: 16,
        name: "ext (16)",
        img: "/assets/images/Renders/exteriores/ext (16).jpg"
    },
    {
        id: 17,
        name: "ext (17)",
        img: "/assets/images/Renders/exteriores/ext (17).jpg"
    },
    {
        id: 18,
        name: "ext (18)",
        img: "/assets/images/Renders/exteriores/ext (18).jpg"
    },
    {
        id: 19,
        name: "ext (19)",
        img: "/assets/images/Renders/exteriores/ext (19).jpg"
    },
    {
        id: 20,
        name: "ext (20)",
        img: "/assets/images/Renders/exteriores/ext (20).jpg"
    },
    {
        id: 21,
        name: "ext (21)",
        img: "/assets/images/Renders/exteriores/ext (21).jpg"
    },
    {
        id: 22,
        name: "ext (22)",
        img: "/assets/images/Renders/exteriores/ext (22).jpg"
    },
    {
        id: 23,
        name: "ext (23)",
        img: "/assets/images/Renders/exteriores/ext (23).jpg"
    },
    {
        id: 24,
        name: "ext (24)",
        img: "/assets/images/Renders/exteriores/ext (24).jpg"
    },
    {
        id: 25,
        name: "ext (25)",
        img: "/assets/images/Renders/exteriores/ext (25).jpg"
    }



    
]

//-----renderizar cards-----//

let card1 = document.getElementById("card-template1")


amplaciones.map((x1) => {
    card1.innerHTML += `
 
    <div class="card">
          <a id="${x1.id}" onmouseover="titleShow(${x1.id})" onmouseout="resetTitle(${x1.id})" class="card__imgCont" href="/pages/obras/${x1.name}.html">
             <img src="${x1.img}" alt="${x1.name}" class="card__imgC" id="${x1.id}">
           
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


