var n1 = document.querySelector('#n1')
var resultado = document.querySelector('span')

function chamar(){

   var palavra = n1.value
   switch(palavra){
      case "1":
         resultado.innerHTML = "UM"
      break;

      case "2":
         resultado.innerHTML = "DOIS"
      break;

      case "3":
         resultado.innerHTML = "TRÊS"
      break;

      case "4":
         resultado.innerHTML = "QUATRO"
      break;

      case "5":
         resultado.innerHTML = "CINCO"
      break;

      case "6":
         resultado.innerHTML = "SEIS"
      break;

      case "7":
         resultado.innerHTML = "SETE"
      break;

      case "8":
         resultado.innerHTML = "OITO"
      break;

      case "9":
         resultado.innerHTML = "NOVE"
      break;

      case "10":
         resultado.innerHTML = "DEZ"
      break;

   }
}


