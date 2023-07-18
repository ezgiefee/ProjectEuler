/* You are given the following information, but you may prefer to do some research for yourself.
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)? */

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