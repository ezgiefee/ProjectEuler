function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const gridSize = 20;

//routes = (2n)! / (n!)^2
const routes = factorial(2 * gridSize) / factorial(gridSize) ** 2;

console.log('The number of routes is : ', routes);