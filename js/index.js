const hamburger = document.querySelector(".hamburger");
const headerUl = document.querySelector(".header_outer");
let isClosed = true;
hamburger.addEventListener("click", function(e){
    headerUl.style.display = isClosed ? "block" : "none";
    isClosed = !isClosed;
    headerUl.classList.add("hamburger_openned")
})