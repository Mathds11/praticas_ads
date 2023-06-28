let n1 = document.getElementById('val1');
let n2 = document.getElementById('val2');
let n3 = document.getElementById('val3');
let result = document.getElementById('resultado');

function btCalculo(){
    result.value = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value))/3;
    if(result.value < 6){
       
    result.innerHTML = result.value + ' Você foi reprovado'
}else{
    result.innerHTML = result.value + ' Você foi aprovado'
}
}