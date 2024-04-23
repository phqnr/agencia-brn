var btnMenu = document.getElementById("btn-menu");
var menuMobile = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});


menu.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});