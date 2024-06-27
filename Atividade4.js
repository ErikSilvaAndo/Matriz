soma = 0;

let arr = [
  [2, 3, 1],
  [4, 5, 6],
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    soma = soma + arr[i][j];
  }
}
console.log(soma);
