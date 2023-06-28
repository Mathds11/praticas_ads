let nascimento = document.getElementById('num1');
let atual = document.getElementById('num2');
let result = document.getElementById('resultado');

function btCalculo(){
    result.value = (parseInt(atual.value) - parseInt(nascimento.value));
    if(result.value >= 0){
    result.innerHTML = 'Você tem ' + result.value + ' anos de idade'
    }else{
    result.innerHTML = 'Digite um ano válido!'
}
}