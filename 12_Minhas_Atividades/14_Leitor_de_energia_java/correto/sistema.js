let formulario = document.getElementById('form');
let leitura1 = document.getElementById('numb1');
let leitura2 = document.getElementById('numb2');
let baixarenda = document.getElementById('chbox');
let result = document.getElementById('txtbox1');


function btCalculo(){
    if(baixarenda.checked == true){
        let i=0;
        i = (leitura1.value - leitura2.value)*0.41;
        result.innerHTML = 'O cliente vai pagar ' + i;
        
    }else{
    let i=0;
    i = (leitura1.value - leitura2.value)*0.76;
    result.innerHTML = 'O cliente vai pagar ' + i;
    }
}

function btLimpar(){
    form.reset();
}