// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = ['1959', '1962', '1970', '1994', '2002']


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let i = 0; i < copasBrasil.length; i++) {
  console.log(`O Brasil ganhou as copas de ${copasBrasil[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(i = 0; i < frutas.length; i++) {
  if(frutas[i] === 'Pera') {
    console.log(`Achei a ${frutas[i]}`)
  } else {
    console.log("Procurando...")
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var pegaFruta = frutas[frutas.length - 1]