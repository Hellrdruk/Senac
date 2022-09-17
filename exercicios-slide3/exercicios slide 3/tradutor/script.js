var palavra = document.querySelector('#palavra')
var resultado = document.querySelector('span')

function chamar(){

   var traducao = palavra.value

   switch(traducao){
      case "hello":
         resultado.innerHTML = "Oi"
      break;   

      case "bye":
         resultado.innerHTML = "tchau"
      break;  

      case "green":
         resultado.innerHTML = "verde"
      break;  

      case "yellow":
         resultado.innerHTML = "amarelo"
      break;  

      case "blue":
         resultado.innerHTML = "azul"
      break;  

      case "pink":
         resultado.innerHTML = "rosa"
      break;  

      case "black":
         resultado.innerHTML = "preto"
      break;  

      case "love":
         resultado.innerHTML = "amor"
      break;  

      case "hate":
         resultado.innerHTML = "ódio"
      break;  

      case "car":
         resultado.innerHTML = "carro"
      break;  


   }
}