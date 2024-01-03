const botoes = document.querySelectorAll('.botao')

const personagem = document.querySelectorAll (".personagem")

botoes.forEach((botao, indice) => {botao.addEventListener("click",() => { 

    desselecionar();
    desselecionarpersonagem();

    botao.classList.add("selecionado");
    personagem[indice].classList.add("selecionado");

});

});

function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionar() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}
