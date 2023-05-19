var sumOfSquares = 1;
var squareOfSum = 1;

for (let i = 1; i <= 100; i++){
  sumOfSquares += Math.pow(i, 2);
  squareOfSum += i;
}
squareOfSum = Math.pow(squareOfSum, 2);

console.log("The difference between two numbers is ", squareOfSum - sumOfSquares);