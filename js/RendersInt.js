//-----lista de cards-----//

const amplaciones = [
    {
        id: 1,
        name: "Int (1)",
        img: "/assets/images/Renders/interiores/Int (1).jpg"
    },
    {
        id: 2,
        name: "Int (2)",
        img: "/assets/images/Renders/interiores/Int (2).jpg"
    },
    {
        id: 3,
        name: "Int (3)",
        img: "/assets/images/Renders/interiores/Int (3).jpg"
    },
    {
        id: 4,
        name: "Int (4)",
        img: "/assets/images/Renders/interiores/Int (4).jpg"
    },
    {
        id: 5,
        name: "Int (5)",
        img: "/assets/images/Renders/interiores/Int (5).jpg"
    },
    {
        id: 6,
        name: "Int (6)",
        img: "/assets/images/Renders/interiores/Int (6).jpg"
    },
    {
        id: 7,
        name: "Int (7)",
        img: "/assets/images/Renders/interiores/Int (7).jpg"
    },
    {
        id: 8,
        name: "Int (8)",
        img: "/assets/images/Renders/interiores/Int (8).jpg"
    },
    {
        id: 9,
        name: "Int (9  )",
        img: "/assets/images/Renders/interiores/Int (9).jpg"
    },
    {
        id: 10,
        name: "Int (10)",
        img: "/assets/images/Renders/interiores/Int (10).jpg"
    },
    {
        id: 11,
        name: "Int (11)",
        img: "/assets/images/Renders/interiores/Int (11).jpg"
    },
    {
        id: 12,
        name: "Int (12)",
        img: "/assets/images/Renders/interiores/Int (12).jpg"
    },
    {
        id: 13,
        name: "Int (13)",
        img: "/assets/images/Renders/interiores/Int (13).jpg"
    },
    {
        id: 14,
        name: "Int (14)",
        img: "/assets/images/Renders/interiores/Int (14).jpg"
    },
    {
        id: 15,
        name: "Int (15)",
        img: "/assets/images/Renders/interiores/Int (15).jpg"
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


