ValRaio = parseInt(prompt('Qual o valor do raio que você necessita? (digite o valor em metros)'));

var valor = Math.trunc(2 * Math.PI * ValRaio)

document.write('O cumprimento da circunferência de ' + ValRaio + ' metros é de aproximadamente ' + valor + 'π')