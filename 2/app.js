// Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.
'use strict';

const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flattenArray(array) {
  let flatArray = [];
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      flatArray = flatArray.concat(flattenArray(elem));
    } else {
      flatArray.push(elem);
    }
  });
  return flatArray;
}

console.log(flattenArray(array));
