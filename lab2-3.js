'use strict'
var sueldo = parseFloat( prompt ("Ingrese el sueldo: $"));
var bonus = parseFloat (prompt ("Ingrese el bonus correspondiente: $"));
var total = sueldo + bonus;
document.write ("El total es : $", + total);