let menubtn = document.querySelector(".menu-btn")
let closebtn = document.querySelector(".close-btn")
let headsidebar = document.querySelector(".head-side-bar")

menubtn.addEventListener("click", () => {
    headsidebar.classList.add("active")
})

closebtn.addEventListener("click", () => {
    headsidebar.classList.remove("active")
})