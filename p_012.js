
let predict = 1;
let triangleNumber = 0;
let count = 0;
var check = true;

while (check) {
  triangleNumber += predict;
  predict++;
  count = countDivisor(triangleNumber);
  if(count > 500){
    check = false;
  }
}

console.log("Triangle number is ", triangleNumber);


function countDivisor(n){
  let count = 0;
  for(let i=1;i<=n;i++){
    if(n % i == 0){
      count++;
    }
  }
  return count;
}
