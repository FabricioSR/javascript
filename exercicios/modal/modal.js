const modal = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");

modal.addEventListener ("click", function(){
    overlay.classList.toggle("open-modal");
})

close.addEventListener ("click", function(){
    overlay.classList.remove("open-modal");
})