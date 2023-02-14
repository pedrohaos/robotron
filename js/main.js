import {estatisticasPecas} from "./estatisticasPecas.js";

const controle = document.querySelectorAll("[data-controle]");

const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = new estatisticasPecas(); 

const alterarSkin = document.querySelectorAll("#alterar");

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');
    
    if(operacao === "-"){
        peca.value = parseInt(peca.value)-1;
        //if(peca.value < 0) peca.value = 00;
    }else{
        peca.value = parseInt(peca.value)+1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas.pecas[peca][elemento.dataset.estatistica]
    });
};

function trocaImagem(cor){
    document.querySelector(".robo").src=`img/Robotron 2000 - ${cor}.png`;
}

alterarSkin.forEach((elementos)=>{
    elementos.addEventListener("click", (evento)=>{
        evento.preventDefault();
        console.log(evento.target.dataset.alterar);
        trocaImagem(evento.target.dataset.alterar)
    })
});

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});

console.log(estatisticas)
