let txtbox = document.getElementById('text');
let sp = document.getElementById('result');

function txtFuncao(){
    txtbox.value = text.value.toUpperCase();
    sp.value = text.value.length
    sp.innerHTML = 'Numeros de caracteres é: ' + sp.value;
}