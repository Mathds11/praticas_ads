let Txt = document.getElementById('textbox');
let bt = document.getElementById('bt')
let Resultado = document.getElementById('result');

Txt.onchange = function(){
    let i = 0;
    i = Math.cbrt(Txt.value);
    Resultado.innerHTML = 'O valor de '+ Txt.value+'³ é de: ' + i;
};
