var temp = 0;
var sum = 0;
var third = 0;

for (let i = 1; i < 333; i++){
  for (let j = i + 1; j < 500; j++){
    sum = i + j;
    third = 1000 - sum;
    temp = Math.pow(i, 2) + Math.pow(j, 2);
    if (Math.pow(third, 2) == temp) {
      console.log("a: ", i, " b: ", j, " c: ", third);
      console.log("The product of the three numbers is ", (i * j * third));
    }
  }
}