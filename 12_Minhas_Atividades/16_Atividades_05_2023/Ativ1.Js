var numero = parseInt(prompt('Digite seu numero'))
var dividir = (numero / 2);

if (numero <= 20) {
    alert("Este número não será alterado");
} else if (numero > 20) {
    alert('pelo número digitado ser maior que 20 ele sera dividido ao meio e o resultado sera: ' + dividir)
}
