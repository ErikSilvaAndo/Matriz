let arr = [
  [2, 3, 4],
  [6, 5, 7],
];
let multiplicacao = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    multiplicacao = multiplicacao * arr[i][j];
  }
}
console.log(multiplicacao);
