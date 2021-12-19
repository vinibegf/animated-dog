const navbarAtivadorPesquisa = document.querySelector(".nav-bar__ativador--pesquisa");
const navbarPesquisa = document.querySelector(".nav-bar__pesquisa");
navbarAtivadorPesquisa.addEventListener("click", function() {
    if (navbarPesquisa.classList.contains("nav-bar__pesquisa--ativado")) {
        navbarPesquisa.classList.remove("nav-bar__pesquisa--ativado");
    } else {
        navbarPesquisa.classList.add("nav-bar__pesquisa--ativado");
    }
});

const navbarAtivadorMenu = document.querySelector(".nav-bar__ativador--menu");
const navMenuAtivador = document.querySelector(".nav-menu__ativador");
const navMenu = document.querySelector(".nav-menu");
navbarAtivadorMenu.addEventListener("click", function() {
    navMenu.classList.add("nav-menu--ativado");
});
navMenuAtivador.addEventListener("click", function() {
    navMenu.classList.remove("nav-menu--ativado");
});