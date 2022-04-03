// Retorne o url da página atual utilizando o objeto window
const enderecoPagina = window.location.href

console.log(enderecoPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector('.ativo')
console.log(elementoAtivo)


// Retorne a linguagem do navegador

console.log(window.navigator.language)

// Retorne a largura da janela 

let tamanhoJanela = window.innerWidth
console.log(tamanhoJanela,'px')