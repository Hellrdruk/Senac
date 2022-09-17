var nome = document.querySelector('#nome')
var resultado = document.querySelector('span')

function chamar(){

    var letra = nome.value[0] 

    switch(letra){
        case "A":
        resultado.innerHTML = "1"
        break;

        case "B":
        resultado.innerHTML = "2"
        break;

        case "C":
        resultado.innerHTML = "3"
        break;

        case "D":
        resultado.innerHTML = "4"
        break;

        case "E":
        resultado.innerHTML = "5"
        break;

        case "F":
        resultado.innerHTML = "6"
        break;

        case "G":
        resultado.innerHTML = "7"
        break;
    }
}