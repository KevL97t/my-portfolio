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