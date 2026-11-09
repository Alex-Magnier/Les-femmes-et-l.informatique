const burgerBtn = document.getElementById("burgerBtn");
const popupMenu = document.getElementById("popupMenu");
const burgerIcon = burgerBtn.querySelector("img");

burgerBtn.addEventListener("click", function() {
    popupMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

    if (popupMenu.classList.contains("open")){
        burgerIcon.src = "/assets/img/cross-burger-menu.svg";
    }else{
        burgerIcon.src = "/assets/img/menu-burger-icon.svg";
    }
});