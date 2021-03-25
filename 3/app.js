// Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.
"use strict";

const tenths = {
  0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
};

const hundredths = {
  10: "десять",
  11: "одиннадцать",
  12: "двенадцать",
  13: "тринадцать",
  14: "четырнадцать",
  15: "пятнадцать",
  16: "шестнадцать",
  17: "семнадцать",
  18: "восемнадцать",
  19: "девятнадцать",
  20: "двадцать",
  30: "тридцать",
  40: "сорок",
  50: "пятьдесят",
  60: "шестьдесят",
  70: "семьдесят",
  80: "восемьдесят",
  90: "девяносто",
};

const thousandth = {
  100: "сто",
  200: "двести",
  300: "триста",
  400: "четыреста",
  500: "пятьсот",
  600: "шестьсот",
  700: "семьсот",
  800: "восемьсот",
  900: "девятьсот",
};

const tenThousandth = {
  1000: "тысяча",
  2000: "две тысячи",
  3000: "три тысячи",
  4000: "четрые тысячи",
  5000: "пять тысяч",
  6000: "шесть тысяч",
  7000: "семь тысяч",
  8000: "восемь тысяч",
  9000: "девять тысяч",
};

const hundredThousandth = {
  10000: "тысяча",
  11000: "тысяча",
  12000: "тысяча",
  13000: "тысяча",
  14000: "тысяча",
  15000: "тысяча",
  16000: "тысяча",
  17000: "тысяча",
  18000: "тысяча",
  19000: "тысяча",
  20000: "две тысячи",
  30000: "три тысячи",
  40000: "четрые тысячи",
  50000: "пять тысяч",
  60000: "шесть тысяч",
  70000: "семь тысяч",
  80000: "восемь тысяч",
  90000: "девять тысяч",
};

const numberInWordS = Object.assign(
  {},
  tenThousandth,
  thousandth,
  hundredths,
  tenths
);

function getNumberInWords(number) {
  const text = [];
  numbers = number.toString().split("").reverse();

  numbers.forEach((item, index) => {
    if (index > 0) {
      item *= 10 ** index;
    }
    Object.entries(numberInWordS).forEach(([key, value]) => {
      if (+item === +key) {
        text.push(value);
      }
    });
  });

  let cleanedArray = text.reverse().filter((item) => item !== "ноль");
  return cleanedArray.join(" ");
}

console.log(getNumberInWords(4900));