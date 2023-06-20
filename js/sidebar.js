let hamburger = document.getElementById("hamburger")
let navUl = document.getElementById("navUl")

window.onresize = () => sidebarEvent()
window.onload =  () => sidebarEvent()

function sidebarEvent() {
    navUl.classList.add("nodisplay");
    if(window.innerWidth < 770) {
        hamburger.classList.remove("nodisplay")
        hamburger.onclick = () => {
            navUl.classList.toggle("nodisplay")
        }
    }
    else hamburger.classList.add("nodisplay")
}