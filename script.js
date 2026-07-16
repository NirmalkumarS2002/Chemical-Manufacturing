let menubtn = document.querySelector(".menu-btn")
let closebtn = document.querySelector(".close-btn")
let headsidebar = document.querySelector(".head-side-bar")

menubtn.addEventListener("click", () => {
    headsidebar.classList.add("active")
})

closebtn.addEventListener("click", () => {
    headsidebar.classList.remove("active")
})


//
let header = document.querySelector(".header")
let headsec1 = document.querySelector(".head-section1")

window.addEventListener("scroll", () => {
    if (window.scrollY > 220) {
        header.style.position = "fixed"
        headsec1.style.display = "none"
        header.style.background = "black"
    }
    else {
        header.style.position = "absolute"
        headsec1.style.display = "flex" 
        header.style.background = "red"
    }
})


