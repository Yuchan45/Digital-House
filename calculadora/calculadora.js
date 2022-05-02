let sumar = require('./mod-suma/sumar.js');
let restar = require('./mod-resta/restar.js');
let multiplicar = require('./mod-multiplicacion/multiplicar.js');
let dividir = require('./mod-division/dividir.js');


console.log("\n--- CASOS DE PRUEBA ---\n");
console.log("Testeo de suma:");
console.log("2 + 3 =",sumar(2,3));

console.log("Testeo de resta:");
console.log("2 - 3 =",restar(2,3));

console.log("Testeo de multiplicacion:");
console.log("2 * 3 =",multiplicar(2,3));
console.log("2 * 0 =",multiplicar(2,0));
console.log("0 * 3 =",multiplicar(0,3));

console.log("Testeo de division:");
console.log("2 / 3 =",dividir(2,3));
console.log("2 / 0 =",dividir(2,0));
console.log("0 / 3 =",dividir(0,3));