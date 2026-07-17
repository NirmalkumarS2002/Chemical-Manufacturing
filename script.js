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



//fixed btn

const fixedbtn=document.querySelector(".fixed-btn")
fixedbtn.addEventListener("click",()=>{
    window.scrollTo({
        top:"0px",
        behavior:"smooth"
    })
})

//
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        fixedbtn.classList.add("active")
    }

    else{
        fixedbtn.classList.remove("active")
    }
})

