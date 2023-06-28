let botao = document.getElementById("btn");
let idConselho = document.getElementById("idConselho");
let descricaoConselho = document.getElementById("descricaoConselho");

async function selecionarUmConselho() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();
    const conselho = data.slip.advice;
    idConselho.innerHTML = data.slip.id;
    descricaoConselho.innerHTML = conselho;
}

botao.addEventListener('click', selecionarUmConselho);

console.log('Segue o fluxo sem esperar');

