var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var op = document.querySelector('#op')
var resultado = document.querySelector('span')


function chamar(){

   var oper = op.value

   switch(oper){
      case "=":
      if(n1.value == n2.value){
         resultado.innerHTML = "Verdadeiro"
      }else{
         resultado.innerHTML = "Falso"
      }
      break;

      case "!=":
      if(n1.value !== n2.value){
         resultado.innerHTML = "Verdadeiro"
      }else{
         resultado.innerHTML = "Falso"
      }
      break;

      case "<":
      if(n1.value < n2.value){
         resultado.innerHTML = "Verdadeiro"
      }else{
         resultado.innerHTML = "Falso"
      }
      break;

      case ">":
      if(n1.value > n2.value){
         resultado.innerHTML = "Verdadeiro"
      }else{
         resultado.innerHTML = "Falso"
      }
      break;
   }

  
}     