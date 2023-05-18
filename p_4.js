// A palindromic number reads the same both ways. The largest palindrome made from the
// product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(number) {
  var str = number.toString();
  var reverse = str.split('').reverse().join('');
  return str === reverse;
}

function largestPalindrome() {
  let maxSum = 0;
  for (let i = 999; i > 99; i--){
    for (let j = 999; j > 99; j--){
      if (isPalindrome(i*j)) {
        maxSum = Math.max(i * j , maxSum);
      }
    }
  }
  return maxSum;
}

console.log(largestPalindrome());