const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let diferenca;
let somaj = 0;
let somaj2 = 0;
for (let i = 0; i < arr.length; i++) {
  let j = i;
  let j2 = arr.length - 1 - i;
  console.log(arr[i][j]);
  console.log(arr[i][j2]);
  somaj = arr[i][j] + somaj;
  somaj2 = arr[i][j2] + somaj2;
}
diferenca = somaj - somaj2;
console.log(diferenca);
