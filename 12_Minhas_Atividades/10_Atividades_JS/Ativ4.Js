var minutos = parseInt(prompt('Informe os minutos:'));

var dia = Math.trunc (minutos/1440)
var horas = Math.trunc ((minutos%1440)/60)
var min = minutos %60

document.write(minutos + ' minutos equivalem a ' + dia + ' dias ' + horas + 'horas e ' + min + 'minutos');



/*
var minutos = parseInt(prompt('Informe os minutos:'));

var dia = Math.trunc (minutos/1440)
var horas = Math.trunc(minutos/60)
var min = Math.trunc(minutos)

alert(minutos + ' minutos equivalem a ' + dia + ' dias ' + horas + 'horas e ' + min + 'minutos');


var seg = parseInt(prompt('Informe os segundos:'));

var min = Math.trunc (seg /60)
var result = seg %60


alert(seg + ' equivalem ' + min + " minutos " + result + ' segundos ');
*/