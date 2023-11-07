const cardContainer=document.getElementById("card-container");


function renderizarCards(images){

    cardContainer.innerHTML=``;

    images.forEach((product, index)=>{ //index la posicion

        const card= document.createElement("article");

        card.classList.add("card")

        card.innerHTML=`<div class="card__header">
        <img src="${product.image}" alt="${product.name}" class="card__img">
    </div>
    <div class="card__body">
        <div class="card__title">
        ${product.name}
        </div>
        <div class="card__description">
        ${product.description}
           
        </div>
        <div class="card__info">
            <div class="card__date">
            ${fecha}
            </div>
            <div class="card__price">
            $ ${product.price}
            </div>
        </div>
    </div>
    <div class="card__footerCard">
        <button class="card__btn-buy1"  onclick="addToOrder(${index}) " id=${index}>
            Comprar
        </button>
        <div class="card__btn-container">
            <a class="card__btn" href="/pages/product-detail/product-detail.html?id=${index}" >
                Ver mas
            </a>
        </div>
    </div>`
    cardContainer.appendChild(card);
    })
}
renderizarCards();