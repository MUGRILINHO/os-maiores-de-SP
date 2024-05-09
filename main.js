const botoes = document.querySelectorA11(".botao");
const botoes = document.querySelectorA11(".aba-conteudo");

for(let i=0;i <botoes.lenght;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.lenght;j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;

}