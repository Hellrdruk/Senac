var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var resultado = document.querySelector('span')

function chamar() {
    resultado.innerHTML = ((parseFloat(n1.value) ** 2) + (parseFloat(n2.value) ** 2) + (parseFloat(n3.value) ** 2) + (parseFloat(n4.value) ** 2)  )
}
