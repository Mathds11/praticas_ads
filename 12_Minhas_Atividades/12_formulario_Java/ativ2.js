let n1 = document.getElementById('val1');
let n2 = document.getElementById('val2');
let n3 = document.getElementById('val3');
let maior = document.getElementById('resultado')

function BtFuncao(){
    let i = 0;
    i = Math.max(n1.value, n2.value, n3.value);
    maior.innerHTML = 'Maior valor dentre os 3 é: ' + i;
}