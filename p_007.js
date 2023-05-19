var number = 2;
var primeCount = 1;

while (primeCount < 10001) {
  number++;
  if (prime(number)) {
    primeCount++;
  }
}

console.log("The 10001th prime number is: ",number);

function prime(number) {
  let temp = 0;
  for (let i = 2; i <= number/2; i++){
    if (number % i == 0) {
      temp++;
      break;
    }
  }
  if (temp == 0 && number != 1) {
    return true;
  } else {
    return false;
  }
}
