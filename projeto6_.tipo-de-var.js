// Criar um método para ler propriedades de um objeto e exibir as propriedades somente dos que são string

const pessoa = {
  nome: "Natanael",
  sobrenome: "Viana",
  idade: 19,
};

exibirProp(pessoa);

function exibirProp(pessoa) {
  for (chave in pessoa)
    if (typeof pessoa[chave] === "string") console.log(chave, pessoa[chave]);
}
