// Essa função irá comparar 2 números e retornar quem é maior, menor ou se são iguais

function max(n1, n2) {
  if (n1 > n2) {
    console.log(n1 + " é maior do que " + n2);
  } else if (n2 > n1) {
    console.log(n2 + " é maior do que " + n1);
  } else {
    console.log(" Os dois números são iguais");
  }
}

let valor_maior = max(10, 5);
console.log(valor_maior)