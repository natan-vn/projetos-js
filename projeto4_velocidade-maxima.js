// velocidade máxima até 70
// a cada 5km acima do limite você ganha 1 ponto
//Usar Math.floor para arredondar valores
//caso pontos ultrapassem 12 -> suspensão da cnh
prf(70);

function prf(velocidade) {
  const velocidadeMaxima = 70;
  const KM_por_ponto = 5;
  const pontos = Math.floor((velocidade - velocidadeMaxima) / KM_por_ponto);

  if (velocidade <= velocidadeMaxima) {
    console.log("Ok");
  } else {
    if (pontos >= 12) console.log("Carteira suspensa!!!");
    else {
      console.log("Pontos", pontos);
    }
  }
}
