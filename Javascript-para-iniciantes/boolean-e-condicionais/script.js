var possuiGraducacao = false;
var possuiDoutorado = true;

if(possuiGraducacao) {
  console.log('É verdadeiro');
  var x = 10;
} else if(possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada');
}

var nome = 'Danilo';

if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if(!possuiGraducacao) { //False
  console.log('Não possui graduação') 
}

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

var condicional = (5 - 10) && (5 + 5)
if(condicional) {
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}

var condicional2 = (5 - 5)  || (5 + 5) || (10 - 2)
console.log(condicional2)

var corFavorita = 'Verde'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.')
    break
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break
  case 'Verde':
    console.log('Olhe para a floresta.')
    break
  default:
    console.log('Feche os olhos')  
}
