//Receber uma quantidade de valores para avaliar
// Avaliar se cada valor

exibirTipo(10);

function exibirTipo(quantidade) {
  for (let i = 0; i <= quantidade; i++) {
    if (i % 2 === 0) {
      console.log(i, "PAR!");
    } else {
      console.log(i, "ÍMPAR");
    }
  }
}
