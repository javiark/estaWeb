const navbarList = document.getElementById("navbar-list");

function renderHeaderLinks(){
    console.log("boton funciona")

    const listItem1 = document.getElementById("linksProject");
    // console.log(listItem1)
    // listItem1.classList.add("li_linksOn")
    listItem1.classList.toggle("li_linksOn")


    const listItem2 = document.getElementById("linksProject1");
    console.log(listItem2)
    listItem2.classList.toggle("li_linksOn")

    const listItem3 = document.getElementById("linksProject2");
    console.log(listItem3)
    listItem3.classList.toggle("li_linksOn")

    const listItem4 = document.getElementById("linksProject3");
    console.log(listItem4)
    listItem4.classList.toggle("li_linksOn")

    const listItem5 = document.getElementById("linksProject4");
    console.log(listItem4)
    listItem5.classList.toggle("li_linksOn")

    const listItem6 = document.getElementById("linksProject5");
    console.log(listItem4)
    listItem6.classList.toggle("li_linksOn")
    // const ObraNuevaLink = createListItemElement("Obras Nuevas", "ObrasNuevas");
    // const ComercialLink =createListItemElement("Comercial", "comercial");

    // navbarList.appendChild(ObraNuevaLink)
    // navbarList.appendChild(ComercialLink)
}



function createListItemElement(path, text){

const listItem = document.createElement("li");

listItem.classList.add("navbar__nav-link")
listItem.classList.add("navbar__nav-item1")
//le asigno un atributo id
listItem.setAttribute("id", path);
link = createLinkElement(path, text); // el link lo obtenemos de la funcion

listItem.appendChild(link)


}

function createLinkElement(path, text){ 
    const link=document.createElement("a"); //
    link.classList.add("navbar__nav-link"); //le agrego una clasecreo un elemento a
    link.href =`/pages/areas/${path}.html`;
    link.innerText =text; //le inserto un texto
    
    // if (type){ // si tipo no es null
    //     li = document.createElement(type)
    //     li.appendChild(link)
    // }
    // return type ? li : link; // si type existe retornamos li, sino retornamos link

    return link;



}

// renderHeaderLinks()