// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: 'Danilo',
  sobrenome: 'Dantas',
  idade: 21,
  altura: 1.83,
  profissao: 'Programador Web'
}

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}` 
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(sexo) {
    if(sexo == 'homem') {
      return 'Latir'
    } else {
      return 'Não latir'
    }
  }
}