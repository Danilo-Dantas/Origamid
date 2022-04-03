// nomeie 3 propriedades ou métodos de strings
var nome = 'Danilo Dantas'

// fixed
// length
// slice

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')

// btn.addEventListener
// btn.after
// btn.animate
// btn.innerHtml
// btn.id


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function myFunction() {
  /* Get the text field */
  var copiar = document.getElementById("btnCopiar");

  /* Select the text field */
  copiar.select();
  copiar.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Texto copiado!");
}