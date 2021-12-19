const sumarioAtivador = document.querySelector(".sumario__ativador");
const sumarioLista = document.querySelector(".sumario__lista");
const sumarioTitulo = document.querySelector(".sumario__titulo");
sumarioAtivador.addEventListener("click", function() {
    if (sumarioAtivador.textContent == "esconder") {
        sumarioLista.style.display = "none";
        sumarioTitulo.style.marginBottom = "0";
        sumarioAtivador.textContent = "mostrar";
    } else {
        sumarioLista.style.display = "block";
        sumarioTitulo.style.marginBottom = "1rem";
        sumarioAtivador.textContent = "esconder";
    }
});

$(".sumario__subtitulo").click(function() {
    $("html, body").animate({
        scrollTop: 0}, "slow");
});

$("#sumarioItem1").click(function() {
    $("html, body").animate({
        scrollTop: $("#sumarioTrecho1").offset().top - 80}, "slow");
});

$("#sumarioItem2").click(function() {
    $("html, body").animate({
        scrollTop: $("#sumarioTrecho2").offset().top - 80}, "slow");
});

$("#sumarioItem3").click(function() {
    $("html, body").animate({
        scrollTop: $("#sumarioTrecho3").offset().top - 80}, "slow");
});

$("#sumarioItem4").click(function() {
    $("html, body").animate({
        scrollTop: $("#sumarioTrecho4").offset().top - 80}, "slow");
});