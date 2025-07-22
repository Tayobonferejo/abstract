const menu = document.querySelector(".menuBar > a");
const openBar = document.querySelector(".openBar");

menu.addEventListener("click", (event) => {
    event.preventDefault();
    
    menu.classList.toggle("hamburg");

    if(!menu.classList.contains("hamburg")){
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`
        openBar.classList.add("openBar");
    }
     else {
        menu.innerHTML = `<i class="fa-solid fa-x"></i>`
        openBar.classList.remove("openBar");
    }

});