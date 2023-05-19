// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var product = 1;
var temp = [];

function products(num) {
  var count = 1;
  while (count <= num) {
    if (product % count != 0) {
      temp = divider(count);
      for (let i = 0; i < temp.length; i++){
        product *= temp[i];
        if (product % count == 0) {
          break;
        }
      }
    }
    count++;
  }
  return product;
}

function divider(number) {
  var arr = [];
  for (let i = 2; i <= number; i++){
    if (number % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(products(10));

