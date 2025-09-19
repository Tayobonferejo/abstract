const menu = document.querySelector(".menuBar > a");
const openBar = document.querySelector("#dropDown");

menu.addEventListener("click", (event) => {
    event.preventDefault();
    // toggling the menu function
    menu.classList.toggle("hamburg");

    if(!menu.classList.contains("hamburg")){
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`
        openBar.classList.add("open");
    }
     else {
        menu.innerHTML = `<i class="fa-solid fa-x"></i>`
        openBar.classList.remove("open");
    }

});
