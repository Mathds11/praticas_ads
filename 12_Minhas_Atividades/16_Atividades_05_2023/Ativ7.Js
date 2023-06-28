let massaI = 1.0; //em gramas
let massaL = 0.10; //em gramas
let tempo = 0; // Tempo inicial em segundos
let resultado = document.getElementById('results')

function btPlay(){
while (massaI > massaL) {
  massaI -= massaI * 0.25; // Reduz a massa em 25%
  tempo += 30; // Incrementa o tempo em 30 segundos
  resultado.innerHTML = "Tempo necessário para que a massa do material se torne menor que 0,10 gramas é de: " + tempo + " segundos";
}
}