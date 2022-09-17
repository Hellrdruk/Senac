var n1 = document.querySelector('#Y')
var n2 = document.querySelector('#Z')
var resultado = document.querySelector('span')

function aparecer() {
    resultado.innerHTML = (parseFloat(n2.value) - parseFloat(n1.value)) 
}