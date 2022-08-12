// Abrir Caixa de Pesquisa
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

input.style.display = "none";

icon.onclick = function () {
    search.classList.toggle("active");
    input.style.display = "block";
};