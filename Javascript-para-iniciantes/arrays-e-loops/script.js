var videoGames = ['Switch', 'PS4', 'XBOX']

var ultimoItem = videoGames.pop() //Remove o último item da lista

videoGames.push("3DS") //adiciona um item ao final da array

videoGames.length //Mostra a quantidade de itens na lista

//LOOP COM FOR

// for (var numero = 0; numero <= 10; numero++ ) {  //Retorna de 0 até 10
//   // console.log(numero)
// }

// var num = 0
// var maximo = 50
// for(;num < maximo;) {
//   console.log(num)
//   num++
// }

//LOOP COM WHILE

var i = 0     
while (i <= 10) {   //Retorna de 0 até 10
  // console.log(i)
  i++
}


//Mostrando os itens da array

// for(var item = 0; item < videoGames.length;item++) {
//   if(videoGames[item] == '3DS'){
//     console.log(`Achei o ${videoGames[item]} na posição ${item}`)
//     break
//   } else {
//     console.log("Procurando...")
//   }
// }

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function(item, index, array) {
  console.log(item, index, array)
})

