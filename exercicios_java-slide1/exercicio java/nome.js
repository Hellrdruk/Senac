var nome = document.querySelector('#name')
var resultado = document.querySelector('#mensagem')
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var n5 = document.querySelector('#n5')
var no = document.querySelector('#nome')

function aparecer() {
    resultado.innerHTML = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value) + parseFloat(n5.value) / 5 )
    no.innerHTML = nome.value

}
