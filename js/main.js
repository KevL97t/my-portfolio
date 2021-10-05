// Animador del menú desplegable

let btnItem = document.querySelector(".item-container .btn-item");

btnItem.addEventListener("click", function(e){
    let btn = e.target;
    console.log(e.target)
    if(btn.className == "btn-item active"){
        ocultarClase();
    } else {
        btn.classList.add("active")
    }
});

function ocultarClase(){
    btnItem.classList.remove("active");
}


// Generador de frase aleatoria

let quotesArray = ["There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.","We cannot solve problems with the kind of thinking we employed when we came up with them.","Learn as if you will live forever, live like you will die tomorrow.", "When we strive to become better than we are, everything around us becomes better as well.", "Don’t let yesterday take up too much of today.", "He who conquers himself is the mightiest warrior."]

let authorsArray = ["Patrick Rothfuss", "Albert Einstein", "Mahatma Gandhi", "Paulo Coelho", "Will Rogers", "Confucius"]

let quote = document.getElementById("quote");
let author = document.getElementById("author");



function mostrarFrase(){
   let randomNumber = Math.round(Math.random()*(quotesArray.length-1));
    console.log(randomNumber);
    let newQuote = quotesArray[randomNumber];
    let newAuthor = authorsArray[randomNumber];
    console.log(newQuote)
    quote.innerHTML = "“ " + newQuote + " ”"; 
    author.innerHTML = "- " + newAuthor;
}

quote.onload = mostrarFrase();

// Funcion para crear nuevas frases con su respectivo autor
//Esta no se ha usado todavía

// function generarFrase(newQ, newA){
//     let generateQuote = newQ;
//     let generateAuthor = newA;
//     quotesArray.push(generateQuote);
//     authorsArray.push(generateAuthor);
// }

// generarFrase("Random Quote","Random Author")



// CÓDIGO BOTON QUE GENERA FRASES

let quoteBtn = document.querySelector(".about-main-container .about--quote-button-container");

console.log(quoteBtn)

quoteBtn.addEventListener("click", function(e){
     mostrarFrase();
});



// contador de diplomas

let devDiplomas = document.querySelectorAll(".dev-diplomas-item");
let totalDev = devDiplomas.length;
console.log(totalDev);


// CÓDIGO DE BOTON PARA MOSTRAR/OCULTAR DIPLOMAS


let diplomaBtn = document.querySelector(".learning--main-diploma-container__btn")
let learningDeploy = document.querySelector(".main-learning-container")

diplomaBtn.addEventListener("click", function(e){
    // let btn = e.target;
    // console.log(e.target)
    if(learningDeploy.className == "main-learning-container active"){
        hideSection();
        diplomaBtn.classList.remove("active")
    } else {
        learningDeploy.classList.add("active")
        diplomaBtn.classList.add("active")
    }
    console.log(learningDeploy);
});

function hideSection(){
    learningDeploy.classList.remove("active")
}


