var a=1; var b=2; var c=-3;
var poten = b**2
var mult = -4 * a * c
var delta = poten + mult
var raiz = parseInt(Math.sqrt(delta));
console.log("RAIZ" +raiz);
var mult1 = -b - raiz
var mult2 = -b + raiz
var div = 2 * a
var x1 = mult1 / div
var x2 = mult2 / div

console.log("X1 =" + x1);

console.log("X2 =" +x2);