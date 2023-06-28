let numero1 = document.getElementById('num1');
let numero2 = document.getElementById('num2');
let result = document.getElementById('resultado');

function btCalculo(){
    result.value = (parseInt(numero1.value) + parseInt(numero2.value));
    if(result.value >= 0){
    result.innerHTML = 'A soma dos números escolhidos é: ' + result.value
    }else{
    result.innerHTML = 'Digite um ano válido!'
}
}