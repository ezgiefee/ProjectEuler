function sumDigitsInFact(n) {
  let factorial = BigInt(1);
  for (let i = 2; i <= n; i++) {
    factorial *= BigInt(i);
  }
  let factorialString = factorial.toString();
  let sum = 0;
  for (let digit of factorialString) {
    sum += parseInt(digit);
  }
  return sum;
}

console.log(sumDigitsInFact(100)); 

