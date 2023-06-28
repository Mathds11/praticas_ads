let lacuna1 = document.getElementById('num1');
let lacuna2 = document.getElementById('num2');
let lacuna3 = document.getElementById('num3');
let soma = document.getElementById('resultado');

function btCalculo(){
    soma.value = (parseInt(lacuna1.value) + parseInt(lacuna2.value) + parseInt(lacuna3.value));
    if(soma.value > 50){
    soma.innerHTML = "A soma dos numeros digitados é de: " + soma.value + " e esse resultado é maior que cinquenta."
    }else{
    soma.innerHTML = "A soma dos numeros digitados é de: " + soma.value + " e esse resultado é menor que cinquenta."
}
}   