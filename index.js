// FUNCIONALIDADE DE REVELAR OS ATRIBUTOS DA PÁGINA
window.revelar = ScrollReveal({ reset: true });


// TOPO DO SITE (first section)
revelar.reveal(".efeito-txt-topo", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '8rem'
});

revelar.reveal(".efeito-img-topo", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '8rem',
  delay: 300
});


// TÍTULOS DA PÁGINA
revelar.reveal(".titulo", {
  duration: 1500, // sempre colocar segundos * 1000
  distance: '4rem'
});


// ESPECIALIDADES 
revelar.reveal(".box1", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 500
});

revelar.reveal(".box2", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1000
});

revelar.reveal(".box3", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500
});


// SOBRE
revelar.reveal(".reveal-img-sobre", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '10rem',
  delay: 500,
  origin: 'right'
});

revelar.reveal(".reveal-txt-sobre", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '10rem',
  delay: 1000,
  origin: 'left'
});


// PORTFOLIO
revelar.reveal(".port1", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 500
});

revelar.reveal(".port2", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1000
});

revelar.reveal(".port3", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500
});


// CONTATO
revelar.reveal(".nome", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'left'
});

revelar.reveal(".email", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'right'
});

revelar.reveal(".telefone", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'left'
});

revelar.reveal(".mensagem", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500
});

revelar.reveal(".btn-form", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500
});







// MENU-MOBILE
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