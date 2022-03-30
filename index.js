const ulEl = document.querySelector(".menu-section");
const openEl = document.querySelector(".btn-open");
const closeEl = document.querySelector(".btn-close");

openEl.addEventListener("click", function(){
    ulEl.style.display = "block"
    openEl.style.display = "none"
    closeEl.style.display = "inline-block"
})
closeEl.addEventListener("click", function(){
    ulEl.style.display = "none"
   
    closeEl.style.display = "none"
    openEl.style.display = "inline-block"
})