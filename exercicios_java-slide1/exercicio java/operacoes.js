var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado1 = document.querySelector('#span1')
var resultado2 = document.querySelector('#span2')
var resultado3 = document.querySelector('#span3')
var resultado4 = document.querySelector('#span4')

function aparecer() {
    resultado1.innerHTML = (parseFloat(n1.value) + parseFloat(n2.value)) 
    resultado2.innerHTML = (parseFloat(n1.value) - parseFloat(n2.value)) 
    resultado3.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) 
    resultado4.innerHTML = (parseFloat(n1.value) / parseFloat(n2.value)) 
}


