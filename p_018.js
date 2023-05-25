const triangle = [
  [75],                                                       //00      75
  [95, 64],                                                   //10,11   95
  [17, 47, 82],                                               //20,21   47
  [18, 35, 87, 10],                                           //31,32   87
  [20, 4, 82, 47, 65],                                        //42,43   82
  [19, 1, 23, 75, 3, 34],                                     //52,53   75
  [88, 2, 77, 73, 7, 63, 67],                                 //63,64   73
  [99, 65, 4, 28, 6, 16, 70, 92],                             //73,74   28
  [41, 41, 26, 56, 83, 40, 80, 70, 33],                       //83,84   83
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],                   //94,95   47
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],               //104,105  43,73,91,67,98
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],           
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

let tempMax = triangle[0][0];
var sum = tempMax;
var k = 0;

for (let i = 1; i < triangle.length; i++) {
  if (triangle[i][k] > triangle[i][k + 1]) {
    tempMax = triangle[i][k];
  } else {
    tempMax = triangle[i][k + 1]
    k = k + 1; 
  }
  sum += tempMax;
}

function solution(t) {
  for (let i = t.length - 2; i >= 0; i--)
    for (let j = 0; j <= i; j++) {
      t[i][j] += Math.max(t[i + 1][j], t[i + 1][j + 1]);
    }
  return triangle[0][0];
}
console.log("Using the function : ",solution(triangle));

console.log("Sum is ", sum);

//I couldn't understand the approach in the solution function.
//I found it from: https://www.xarg.org/puzzle/project-euler/problem-18/