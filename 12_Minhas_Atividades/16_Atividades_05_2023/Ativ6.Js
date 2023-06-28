let resultado = document.getElementById('results')

function btPlay(){
let n ='';
for(let i = 0; i <= 600; i++) {
    if (i % 2 === 1) {
        continue;
    }else{
        n = n + '\n' + i;
    };
  };
  resultado.innerHTML = 'Os valores pares entre 0 e 600 são: '+n;
};
