function countingSundays() {
  var n = 0;
  for (var y = 1901; y <= 2000; y++) {
    for (var m = 0; m < 12; m++) {
      if (new Date(y, m, 1).getDay() === 0) {
        n++;
      }
    }
  }
  return n;
}

console.log(countingSundays());