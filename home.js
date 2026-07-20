
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


