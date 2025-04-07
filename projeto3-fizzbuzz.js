//Divisível por 3 = fizz
//Divisível por 5 - buzz
//Divisível por 3 e 5 = fizzbuzz
//Não é um número = "não é um número"

let play = fizzbuzz(15);
console.log(play);

function fizzbuzz(numero) {
  if (typeof numero !== "number") return "Não é um número!";

  if (numero % 3 === 0 && numero % 5 === 0) return "Fizzbuzz";

  if (numero % 3 === 0) return "Fizz";

  if (numero % 5 === 0) return "Buzz";


  return numero;
}
