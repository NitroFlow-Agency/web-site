const hamburgerBtn = document.getElementById("hamburgerBtn")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
let navbarOpen;

if(window.matchMedia("(max-width: 768px)")) {
    navbarOpen = false
    // navMenu.classList.add("displayNone")
    hamburgerBtn.onclick = () => {
        if(navbarOpen) {
            hamburger.src = "img/hamburger.svg"
            navMenu.classList.add("displayNone")
            navbarOpen = false
        } else {
            hamburger.src = "img/close.svg"
            navMenu.classList.remove("displayNone")
            navbarOpen = true
        }
    }
}