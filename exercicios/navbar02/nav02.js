const menu = document.querySelector(".menu");
const links = document.querySelector(".links")

menu.addEventListener("click", function(){
    links.classList.toggle("show-links");
})

//maneira feita com add ou remove

/*menu.addEventListener("click", function(){
    if (links.classList.contains("show-lins")){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
})
*/