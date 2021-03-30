// Написать рекурсивную функцию возведения в степень. На вход принимать число и его степень, на выходе выдавать рассчитанное значение.
'use strict';

function pow(number, power) {
  return power - 1 ? number * pow(number, power - 1) : number;
}

console.log(pow(5, 4));
