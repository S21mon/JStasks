// Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.
'use strict';

const TENTHS = {
  0: 'ноль',
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
};

const HUNDREDTHS = {
  10: 'десять',
  11: 'одиннадцать',
  12: 'двенадцать',
  13: 'тринадцать',
  14: 'четырнадцать',
  15: 'пятнадцать',
  16: 'шестнадцать',
  17: 'семнадцать',
  18: 'восемнадцать',
  19: 'девятнадцать',
  20: 'двадцать',
  30: 'тридцать',
  40: 'сорок',
  50: 'пятьдесят',
  60: 'шестьдесят',
  70: 'семьдесят',
  80: 'восемьдесят',
  90: 'девяносто',
};

const THOUSANDTH = {
  100: 'сто',
  200: 'двести',
  300: 'триста',
  400: 'четыреста',
  500: 'пятьсот',
  600: 'шестьсот',
  700: 'семьсот',
  800: 'восемьсот',
  900: 'девятьсот',
};

const QTY_NULLS_IN_HUNDREDTHS = '00';
const QTY_NULLS_IN_TENTHS = '0';
const DESIGNATION_OF_ONE_THOUSAND = 'тысяча';
const DESIGNATION_OF_SEVERAL_THOUSAND = 'тысяч';
const MAX_NUMBER_SIZE = 100000;
const MAX_NUMBER_LENGTH = 6;

const numberInWords = Object.assign(
  {},
    THOUSANDTH,
    HUNDREDTHS,
    TENTHS,
);

function translateNumberInWords(number) {
  if (number === 0) {
    return numberInWords[number];
  }

  if (number > MAX_NUMBER_SIZE) {
    return;
  }

  const digits = number.toString().split('');
  while (digits.length !== MAX_NUMBER_LENGTH) {
    digits.unshift('0');
  }

  let [ hundredThousandth, tenThousandth, thousandth, hundredths, dozen, units ] = digits;
  let words = [];
  let designationOfThousand = DESIGNATION_OF_SEVERAL_THOUSAND;

  words.push(+hundredThousandth ? numberInWords[hundredThousandth + QTY_NULLS_IN_HUNDREDTHS] + ` ${designationOfThousand}` : '');

  if (checkOnIncludesThousand(words)) {
    designationOfThousand = '';
  }

  words.push(+tenThousandth && numberInWords[tenThousandth + thousandth] ? (numberInWords[tenThousandth + thousandth] + ` ${designationOfThousand}`) :
      +tenThousandth ? numberInWords[tenThousandth + QTY_NULLS_IN_TENTHS] : '');

  if (checkOnIncludesThousand(words)) {
    designationOfThousand = DESIGNATION_OF_ONE_THOUSAND;
  }

  words.push(+thousandth && !numberInWords[tenThousandth + thousandth] ? numberInWords[thousandth] + ` ${designationOfThousand}`: '');
  words.push(+hundredths ? numberInWords[hundredths + QTY_NULLS_IN_HUNDREDTHS] : '');
  words.push(+dozen ? (numberInWords[dozen + units] || numberInWords[dozen + QTY_NULLS_IN_TENTHS]) : '');
  words.push(+units && !numberInWords[dozen + units] ? numberInWords[units] : '');
  return words.filter(item => item).join(' ');
}

function checkOnIncludesThousand(words) {
  return !!words.toString().includes(DESIGNATION_OF_SEVERAL_THOUSAND);
}

console.log(translateNumberInWords(99999));






// function translateNumberInWords(number) {
//   const text = [];
//   let numbers = number.toString().split('').reverse();
//   numbers.forEach((item, index, array) => {
//     item *= 10 ** index;
//     Object.entries(numberInWords).forEach(([key, value]) => {
//       if (+item === +key) {
//         text.push(value);
//       }
//     });
//   });
//
//   return text.reverse().join(' ');
// }
