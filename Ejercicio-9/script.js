function infoString() {
    var cadena = "bicicleta"
    var resultado = "La palabra \"" + cadena + "\" ";

    if (cadena === cadena.toUpperCase()) {
        resultado += " esta formada por todo mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
        resultado += " esta formada por todo minúsculas";
    } else {
        resultado += " esta formada tanto por mayúsculas como minúsculas";
    }

    alert (resultado);
}