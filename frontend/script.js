const menuButtonComponent = function(){
    return `<button id = "menu-btn"></button>`
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    console.log(rootElement.parentElement);

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());
    
    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", function (event){
  //  event.currentTarget.classList.toggle("clicked"); //[metódusoknak van zárójele, a toggle() az] kiírja, hogy clicked az events fülön

    //console.log(rootElement);
   // console.log(event.currentTarget.parentElement); //ezt ne nagyon használjuk, mert ha header-ben van, akkor már nem jó
    //console.log(event.currentTarget.closest("#root"));
    //event.currentTarget.closest("#root").classList.toggle("clicked")
    console.log(menuButtonElement === event.currentTarget)
    event.currentTarget.closest("#root").classList.toggle("menu-opened") 
    });
    
};


window.addEventListener("load", loadEvent);