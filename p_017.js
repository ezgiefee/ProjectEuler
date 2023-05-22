function numberToWords(n) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];

  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (n === 1000) {
    return 'one thousand';
  }

  let words = '';

  if (n >= 100) {
    words += ones[Math.floor(n / 100)] + ' hundred';
    if (n % 100 !== 0) {
      words += ' and ';
    }
  }

  if (n % 100 < 20) {
    words += ones[n % 100];
  } else {
    words += tens[Math.floor((n % 100) / 10)];
    if (n % 10 !== 0) {
      words += '-' + ones[n % 10];
    }
  }

  return words;
}

function countLettersInNumbers(start, end) {
  let totalLetters = 0;

  for (let number = start; number <= end; number++) {
    const words = numberToWords(number);
    const letters = words.replace(/ |-/g, '').length;
    totalLetters += letters;
  }

  return totalLetters;
}

const startNumber = 1;
const endNumber = 1000;
const totalLettersUsed = countLettersInNumbers(startNumber, endNumber);
console.log(totalLettersUsed);  // Output: 21124
