var btnMenu = document.getElementById("btn-menu");
var menuMobile = document.getElementById("menu-mobile");
var overlay = document.getElementById("overlay-menu");
var btnFechar = document.getElementById("btn-fechar");


btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

btnFechar.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});


menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});