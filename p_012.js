
let predict = 1;
let triangleNumber = 0;
let count = 0;
var check = true;
while (check) {
  triangleNumber = triangle(predict);
  count = countDivisor(triangle);
  if(count > 500){
    check = false;
  }
  predict++;
}

console.log("Triangle number is ", triangleNumber);

function triangle(n){
  let triangle = 0;
  for(let i =0;i<=n;i++){
    triangle += i;
  }
  return triangle;
}

function countDivisor(n){
  let count = 0;
  for(let i=1;i<=n;i++){
    if(n % i == 0){
      count++;
    }
  }
  return count;
}
