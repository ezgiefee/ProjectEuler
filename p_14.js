var result = 0;
var limit = 1000000;
var max = 1;
var size = 0;

for(let i=1; i<limit;i++){
  size = getChain(i);
  if(size > max){
    max = size;
    result = i;
  }
}

console.log("Maximum number for the longest chain is : " + result);


function getChain(collatzNumber) {
  var number = BigInt(collatzNumber);
  var chain = new Array();
  while(number != 1n){
      chain.push(number);
      if(number % 2n == 0){
          number = number/2n;
      } else {
          number = (3n*number) + 1n;
      }
  }
  var size = chain.length;
  return size;
}