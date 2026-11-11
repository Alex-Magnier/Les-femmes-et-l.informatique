const burgerBtn = document.getElementById("burgerBtn");
const popupMenu = document.getElementById("popupMenu");
const burgerIcon = burgerBtn.querySelector("img");
const assetsUrl = new URL("../img/", document.currentScript.src);

burgerBtn.addEventListener("click", function() {
    popupMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

    if (popupMenu.classList.contains("open")){
        burgerIcon.src = new URL("cross-burger-menu.svg", assetsUrl);
    }else{
        burgerIcon.src = new URL("menu-burger-icon.svg", assetsUrl);
    }
});