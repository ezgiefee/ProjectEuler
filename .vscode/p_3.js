//What is the largest prime factor of the number 600851475143 ?

function prime(number) {
  for (let i = 2; i < Math.sqrt(number); i++){
    if (number % i == 0) {
      number = number / i;
      i--;
    }
  }
  console.log(number);
}

prime(600851475143);