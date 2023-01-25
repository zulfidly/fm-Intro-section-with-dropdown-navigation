let ham_icon = document.querySelector("#ham-icon")
let x_icon = document.querySelector("#x-icon")
let navbar = document.querySelector("#navbar")

let slideInMenuBG = document.querySelector("#slideInMenuBG")

let featureMenu = document.querySelector("#featureMenu")
let companyMenu = document.querySelector("#companyMenu")

let featureDropList = document.querySelector("#featureDropList")
let companyDropList = document.querySelector(".companyDropList")

let arrowDown = document.querySelector(".arrowDown")
let arrowUp = document.querySelector(".arrowUp")

window.addEventListener("load", () => {
    initNavBar()
    addListenerToNavBar()
    addListenerToHamIcon()
    addListenerToCloseIcon()
    addListenerScreenRotation()
}, {once:true})


//close droplist when user clicked outside menu
//close droplist menu when user clicked another menu
function addListenerToNavBar() {
    window.addEventListener("click", (e)=> {
        // console.log(e.target.id)
        // console.log(e)
        if(e.target.id !== "featureMenu" && e.target.id !== "companyMenu" && e.target.id !== "Careers" && e.target.id !== "About" && e.target.id !== "Login" && e.target.id !== "Register" && e.target.id !== "slideInMenuBG" && e.target.id !== "navbar") {
            closeAllMenu()
        } else if(e.target.id == "featureMenu") {
            companyDropList.classList.add("hidden")
            featureDropList.classList.toggle("hidden")

            document.querySelectorAll(".arrowUp")[0].classList.toggle("hidden")
            document.querySelectorAll(".arrowDown")[0].classList.toggle("hidden")
            document.querySelectorAll(".arrowUp")[1].classList.add("hidden")
            document.querySelectorAll(".arrowDown")[1].classList.remove("hidden")
        } else if(e.target.id == "companyMenu"){
            featureDropList.classList.add("hidden")
            companyDropList.classList.toggle("hidden")

            document.querySelectorAll(".arrowUp")[0].classList.add("hidden")
            document.querySelectorAll(".arrowDown")[0].classList.remove("hidden")
            document.querySelectorAll(".arrowUp")[1].classList.toggle("hidden")
            document.querySelectorAll(".arrowDown")[1].classList.toggle("hidden")
        } else if(e.target.id == "slideInMenuBG"){
            slideInMenuBG.classList.add("hidden")
            navbar.classList.remove("right-0")
            navbar.classList.add("-right-full")
        } else if(e.target.id == "navbar"){
            slideInMenuBG.classList.add("hidden")
            navbar.classList.remove("right-0")
            navbar.classList.add("-right-full")
        }
    })
}

function addListenerScreenRotation() {
    screen.orientation.addEventListener("change", () => {
        initNavBar()
    })
}
function initNavBar(){
    slideInMenuBG.classList.add("hidden");
    navbar.classList.remove("right-0");
    navbar.classList.add("-right-full");
    document.querySelectorAll(".arrowUp")[0].classList.add("hidden")
    document.querySelectorAll(".arrowDown")[0].classList.remove("hidden")
    document.querySelectorAll(".arrowUp")[1].classList.add("hidden")
    document.querySelectorAll(".arrowDown")[1].classList.remove("hidden")
        featureDropList.classList.add("hidden")
        companyDropList.classList.add("hidden")
}
function addListenerToHamIcon() {
    ham_icon.addEventListener("click", () => {
        navbar.classList.remove("-right-full");
        navbar.classList.add("right-0");
        slideInMenuBG.classList.toggle("hidden");
    })
}
function addListenerToCloseIcon() {
    x_icon.addEventListener("click", () => {
        navbar.classList.remove("right-0");
        navbar.classList.add("-right-full");
        slideInMenuBG.classList.toggle("hidden");
    })
}

function closeAllMenu() {
    document.querySelectorAll(".arrowDown").forEach((x) => {
        x.classList.remove("hidden")
    })
    document.querySelectorAll(".arrowUp").forEach((x) => {
        x.classList.add("hidden")
    })
    featureDropList.classList.add("hidden")
    companyDropList.classList.add("hidden")
}


