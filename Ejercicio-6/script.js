var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Introduce el número del DNI");
var letra = "P";

//He utilizado un DNI REAL para hacer la comprobacion.

if(numero < 0 || numero > 99999999) {
  alert("El número que has proporcionado no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("El numero o la letra del DNI que has introducido no es correcto"); //Al introducir otro DNI cuya letra es diferente a P me salta este alert
  }
  else {
    alert("El numero y la letra del DNI es correcto");//Al introducir el DNI cuya letra es P me salta este alert
  }
}