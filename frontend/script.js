let globalVariable1 = 12;

let globalVariable2 = function () {
    let functionVariable1 = "hellobello"
    console.log("inside the function", globalVariable1)
    
    let functionVariable2 = function(){
        console.log("fun variable belseje");
        console.log(globalVariable1);
        console.log(functionVariable1)

        let funInFunVariable1 = true;
        let funInFunVariable1 = function(){

        }
        funInFunVariable2();
    }

    functionVariable2();
    console.log(functionVariable1);

    if (functionVariable1 === "hello") {
        var blockVariable1 = "bye"
    } else {
    // console.log(blockVariable1);   nem fog működni
    }

    console.log(blockVariable1);   
}

globalVariable2();

//console.log(functionVariable1);

var varVariable = 1;

console.log(varVariable) //csak akkor írja ki, ha alatta van

console.log(letVariable1) // ha variable is not defined, akkor a scope-ot nem értük el, ha cannot access, akkor tudja, de nem inicializálta(az adott scope 1. sorában deklaráltuk, de nem inicializálta(nem vette át az értéket)) 

let letVariable1 //= 1;

console.log(letVariable1) // ha nincs ott az egyenlőségjel és az érték! de ez is érték: undefined

let letVariable2 = 2;

console.log(letVariable2) // 2

const constVariable1;

console.log(constVariable1) // syntax error, const-tal nem lehet újra inicializálni a tartalmát

const constVariable2 = "";

constVariable2 = "helloka"

console.log(constVariable2)

const constVariable3 = "hellobello";

constVariable3 = "hellokabelloka"

console.log(constVariable3)


const constObj1 = {};

// constObj1.key = "";

// constObj1 = {key:"value"} // hibaüzenet: assigment, mert nem egy új objektumot hozunk létre, const

// console.log(constObj1)

/*
constObj1.key = "value";  //ez működik, mert hozzáad értéket
constObj1 = { key: "value" } //ez nem fog működni, mert kicseréli a zárójelet
*/

const globalVariable3 = function(parameter1, parameter2, parameter3){    //ennek function scope-ja van, mert ott a function és azon belül van a parameter
    console.log(parameter1); // undefined, mert nincs még benne semmi
    console.log(parameter2); // szintén, mert még nincs meghatározva ez sem
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple";

const globalVariable5 = function(){
    return "pear"
}

const globalVariable6 = function (){
    return "shoes"
}

//callback-functions. addEventListenerrel fogjuk mi használni pl aminek átadnk cab functiont, feltölti

globalVariable3(3); // 3, undefined , mert csak a parameter1-nek adtuk ezt az értéket

globalVariable3(3,2); // 3, 2

globalVariable3(3,globalVariable4); // 3, apple

globalVariable3(globalVariable5(), globalVariable4); // pear, apple

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);

const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root")
    console.log(rootElement); //null
    console.log(parameter1); //event nevű eseményt kapunk

    rootElement.addEventListener("click", function (event){ //addig nem csinál semmit, amíg nem klikkelünk
        console.log(event);
        console.log(event.currentTarget); //root id-jű divet írja ki
        event.currentTarget.insertAdjacentHTML("beforeend", "clicked,"); //ahányszor rákattintunk, megjeleníti
        event.currentTarget.classList.toggle("clicked") //[metódusoknak van zárójele, a toggle() az] kiírja, hogy clicked az events fülön
        event.currentTarget.insertAdjacentHTML("beforeend", `<span>clicked,</span>"`); //így a kék mezőn belülírja ki.
    })

   // console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)