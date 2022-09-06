var num = prompt("Introduce un número");

var resultado = operacion(num);
alert("El número " + num + " es " + resultado);

function operacion(num) {
    if (num % 2 == 0) {
        return " es par";
    } else {
        return "es impar";
    }
}