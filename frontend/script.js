const menuButtonComponent = function(){
    return `<button id = "menu-btn"></button>`
}

const beerSectionComponent = function (title, sub, text, id){
  //return "blablabla"
  return `
    <section id="${id}">
    <h1 class= "beerName">${title}</h1>
    <h2 class= "beerCompany">${sub}</h2>
    <h3 class= "beertype">${text}</h3>
    </section>`
}

const beerAnchorComponent = function (title, id){
  return `
  <a href="#${id}">${title}</a>
  `
}

const beerNavComponent = function(inner){
  return `
    <nav>${inner}</nav>
  `
}

const menuButtonClickEvent = function (event){
      
  event.currentTarget.closest("#root").classList.toggle("menu-opened") ;
}

const loadEvent = function () {

    console.log(beerSectionComponent); // 

    console.log(typeof beerSectionComponent); //function

    console.log(typeof beerSectionComponent()); //string

   // function(){
   //   console.log("blablablablabla"); //Uncaught SyntaxError: Function statements require a function name 
  //  }

  /*(function(){
    console.log("blablablablabla"); // így kiírja 
  })()*/

    const rootElement = document.getElementById("root"); 

    console.log(rootElement.parentElement);

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());
    
    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", menuButtonClickEvent);

    
    
    let beerSections = "";

    for (const beer of beers.cards) {
      beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }

    //console.log(beerSections) //így írja ki

    rootElement.insertAdjacentHTML("beforeend", beerSections);



    let beerAnchors = "";
  
    for (const beer of beers.cards) {
      beerAnchors += beerAnchorComponent(beer.title);
    }

   // rootElement.insertAdjacentHTML("beforeend", beerAnchors);
    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors)); //
}  



window.addEventListener("load", loadEvent);