var seg = parseInt(prompt('Informe os segundos:'));

var min = Math.trunc (seg /60)
var result = seg %60


alert(seg + ' equivalem ' + min + " minutos " + result + ' segundos ');
