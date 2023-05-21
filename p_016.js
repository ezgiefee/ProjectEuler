var sum = 0;
var number = 0n;
number = BigInt(Math.pow(2, 1000));
var sumString = number.toString();

for (let i = 0; i < sumString.length; i++){
  sum += parseInt(sumString[i]);
}

console.log(sum);