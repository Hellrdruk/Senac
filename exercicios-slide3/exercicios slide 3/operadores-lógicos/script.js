var n1 = document.querySelector('#n1')
var op = document.querySelector('#op')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')

function chamar(){

    var oper = (op.value)

    switch(oper){
        case "+":
        resultado.innerHTML = (parseFloat(n1.value) + parseFloat(n2.value))
        break;

        case "-":
        resultado.innerHTML = (parseFloat(n1.value) - parseFloat(n2.value))
        break;

        case "*":
        resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value))
        break;

        case "/":
        resultado.innerHTML = (parseFloat(n1.value) / parseFloat(n2.value))
        break;

        case "^":
        resultado.innerHTML = (parseFloat(n1.value) ** parseFloat(n2.value))
        break;
    }
}