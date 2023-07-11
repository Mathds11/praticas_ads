let btn1 = document.getElementById('btn-alterar1');
let btn2 = document.getElementById('btn-alterar2');
let n = 0;

btn1.onclick = function(){
    n = 1;

    if(n == 1){
    document.getElementById('estilo').href="lista_contatos2.css";
    };
}

btn2.onclick = function(){
    n = 0;

    if(n == 0){
    document.getElementById('estilo').href="lista_contatos.css";
    };
}