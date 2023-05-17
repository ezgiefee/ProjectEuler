var previous = 1;
var current = 2;
var sum = 2;

while (current < 4000000) {
  var next = previous + current;
  previous = current;
  current = next;
  if (next % 2 == 0) {
    sum += next;
  }
}

console.log(sum);


