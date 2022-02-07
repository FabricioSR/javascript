const menu = document.querySelector(".menu");
const sideBar = document.querySelector("aside");
const close = document.querySelector(".close");

menu.addEventListener("click", function(){
// if (sideBar.classList.contains("show-links")) {
//    sideBar.classList.remove("show-links");
// } else {
//    sideBar.classList.add("show-links");
//}
  sideBar.classList.toggle("show-links");
})

close.addEventListener("click", function(){
    sideBar.classList.remove("show-links");
})