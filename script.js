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
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
})


//footer form

let subbtn = document.querySelector(".subscribe-btn")
let submail = document.querySelector("#subemail")

subbtn.addEventListener("click", () => {
    const subregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (submail.value.trim() == "") {
        alert("plese Enter Your Email");
        submail.focus();
        return;
    }

    if (!subregex.test(submail.value.trim())) {
        alert("plsese enter valid email");
        submail.focus();
        return;
    }

    alert("Subscribe Successfully")
    submail.value = ""
})

//loginpage

const loginpage = document.querySelector(".loginpage")
loginpage.addEventListener("click", () => {
    window.location.href = "login.html"
})

// errorpage
const errorPages = document.querySelectorAll('.errorpage');

errorPages.forEach((item) => {

    item.addEventListener('click', () => {

        window.location.href = "404.html";

    });

});