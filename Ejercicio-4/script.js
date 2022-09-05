var valores = [true, 5, false, "hola", "adios", 2];

// Cual de los 2 elementos de texto es mayor
if(valores[3] > valores.length[4]){
console.log(valores[3]+" es el elemento mayor");}
else{console.log(valores[4]+" es el elemento mayor");}


// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];


var resultado = valor1 || valor2;
console.log(resultado);

var resultado = valor1 && valor2;
console.log(resultado);

// Realizar las cinco operaciones matematicas
var numero1 = valores[1];
var numero2 = valores[5];
//Suma
var resultado = numero1 + numero2;
console.log(resultado);
//Resta
var resultado = numero1 - numero2;
console.log(resultado);
//Multiplicacion
var resultado = numero1 * numero2;
console.log(resultado);
//Division
var resultado = numero1 / numero2;
console.log(resultado);
//Porcentaje
var resultado = numero1 % numero2;
console.log(resultado);
