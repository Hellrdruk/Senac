
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var resultado = document.querySelector('span')


function aparecer() {
    resultado.innerHTML = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value)) / 4
}