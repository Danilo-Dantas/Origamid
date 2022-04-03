var pessoa1Nome = "Danilo"
var pessoa1Sobrenome = "Dantas"
var pessoa1Idade = 22

console.log(pessoa1Nome + pessoa1Sobrenome)



var pessoa = {
  nome: 'Danilo',
  idade: 21,
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado
  },
  cinco() {
    return 5
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

var height = 120
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return height / 2 // this.height pega a variável do Obejto. Sem o "this" pega fora dele
  }
}

menu.backgroundColor = '#000'

menu.color = 'blue'

menu.esconder = function() {
  console.log('Escondi')
}

var bg = menu.backgroundColor

