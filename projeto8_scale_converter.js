// Define a temperatura em Kelvin
const kelvin = 293;

// Converte Kelvin para Celsius (subtrai 273)
const celsius = kelvin - 273;

// Converte Celsius para Fahrenheit (multiplica por 9/5 e soma 32)
let fahrenheit = celsius * (9 / 5) + 32;
// Arredonda o valor de Fahrenheit para o número inteiro mais próximo
fahrenheit = Math.floor(fahrenheit);

// Converte Celsius para Newton (multiplica por 33/100)
let newton = celsius * (33 / 100);
// Arredonda o valor de Newton para o número inteiro mais próximo
newton = Math.floor(newton);

// Exibe os resultados no console:
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
