function areaQuadrada(lado) {
  return lado * lado
}

console.log(areaQuadrada(10))

function pi() {
  return 3.14
}

var total = 5 * pi() //15.7

console.log(pi())

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu'
  } else if(cor === 'verde') {
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto de cores'
  }
}

console.log(corFavorita('azul'))

addEventListener('click', function(){ console.log('Oi') })

function mostraConsole () {
  console.log('Olá')
}

addEventListener('click', mostraConsole)

function imc(peso, altura) {
  const imc = peso /(altura ** 2)
  console.log(imc)
}

imc(20, 1.8)


function terceiraIdade(idade) {
  console.log(typeof idade)
  if(typeof idade !== 'number') {
    return 'preencha um número'
  }
  if(idade >= 60){
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade('oi'))


function faltaVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}


var profissao = 'Programador Web'

function dados() {
  var nome = 'Danilo'
  var idade = 21
  function outrosDados() {
    var endereco = 'São Paulo'
    var idade = 22
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.log(dados())

