const alternativas = document.querySelectorAll(".caixa-alternativas button");
const resultado = document.querySelector(".texto-resultado");

alternativas[0].addEventListener("click", function () {
    resultado.textContent = "A inteligência artificial pode trazer desafios e riscos. É importante utilizá-la com responsabilidade.";
});

alternativas[1].addEventListener("click", function () {
    resultado.textContent = "A inteligência artificial pode abrir novas possibilidades para a criatividade, a aprendizagem e a tecnologia.";
});
