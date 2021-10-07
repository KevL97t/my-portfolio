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

let quotesArray = ["There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.","We cannot solve problems with the kind of thinking we employed when we came up with them.","Learn as if you will live forever, live like you will die tomorrow.", "When we strive to become better than we are, everything around us becomes better as well.", "Don’t let yesterday take up too much of today.", "He who conquers himself is the mightiest warrior.", "The successful man will profit from his mistakes and try again in a different way.", "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", "Education is the most powerful weapon which you can use to change the world.", "The most difficult thing is the decision to act, the rest is merely tenacity.", "Talent wins games, but teamwork and intelligence win championships.", "Just one small positive thought in the morning can change your whole day.", "It is never too late to be what you might have been.", "Opportunities don't happen, you create them.", "I am not a product of my circumstances. I am a product of my decisions.", "Someone's sitting in the shade today because someone planted a tree a long time ago.", "True freedom is impossible without a mind made free by discipline.", "Life is like riding a bicycle. To keep your balance you must keep moving.", "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "Perfection is not attainable. But if we chase perfection we can catch excellence."]

let authorsArray = ["Patrick Rothfuss", "Albert Einstein", "Mahatma Gandhi", "Paulo Coelho", "Will Rogers", "Confucius", "Dale Carnegie", "Epictetus", "Nelson Mandela", "Amelia Earhart", "Michael Jordan", "Dalai Lama", "George Eliot", "Chris Grosser", "Stephen R. Covey", "Warren Buffet", "Mortimer J. Adler", "Albert Einstein", "Aristotle", "Vince Lombardi"]

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


// ANIMADOR DEL TITULO LANDING PAGE

let landingTitle = document.getElementById("landing-title");
let strongTitle = document.getElementById("strong-div-title")

function animarTitulo(){
    if(landingTitle.className !== "landing-title active"){
        landingTitle.classList.add("active")
        strongTitle.classList.add("active")
    }
    console.log(landingTitle)
    console.log(strongTitle)
}

landingTitle.onload = animarTitulo();



// ANIMADOR DEL LOGO DE GITHUB

let gitHLogo = document.querySelector(".github-logo-container");
function animarGitH(){
    gitHLogo.classList.add("active");
}

gitHLogo.onload = animarGitH();


// ANIMADOR DE TEXTO PRINCIPAL DE LANDING SECTION

let landingText = document.querySelector(".landing-main-container .main-text-container");
let landingStrong = document.getElementById("landing-strong-text")
function animarTextoLanding(){
    landingText.classList.add("active");
    landingStrong.classList.add("active");
}

landingText.onload = animarTextoLanding();

// ANIMADOR DE LA FOTO DEL LANDING SECTION

let landingImg = document.querySelector(".landing-main-container .logo-container");

function animarImg(){
    landingImg.classList.add("active");
}

landingImg.onload = animarImg();


//ANIMADOR DEL BOTON DE LANDING SECTION

let landingBtn = document.querySelector(".landing-main-container .button-container");

function animarLandingBtn(){
    landingBtn.classList.add("active");
}

landingBtn.onload = animarLandingBtn();
