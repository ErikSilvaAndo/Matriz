const arr = [
  [10, 20, 30],
  [10, 20, 30],
];

let armazem = [];

for (let i = 0; i < arr[0].length; i++) {
  let multiplicacao = 1;
  for (let j = 0; j < arr.length; j++) {
    multiplicacao = arr[j][i] * multiplicacao;
  }

  armazem.push(multiplicacao);
}
console.log(armazem);
