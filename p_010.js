var sum = 0;

for (let i = 0; i < 2000000; i++){
  if (prime(i)) {
    sum += i;
  }
}

console.log("The result is ", sum);

function prime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}