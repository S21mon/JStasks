// На вход приниаем массив целых чисел, который должен быть преобразован по следующим правилам:
// - если последвательность составляет диапазон из последовательных целых чисел (как минимум 3 числа): ‘1, 2, 3’  = ‘1 - 3’,
// - в остальных случая числа разделены запятой

'use strict';
const MIN_QTY_IN_SEQUENCE = 2;

function convertSequence(sequence) {
    let convertedSequence = [];
    let foundedSequence = [];

    sequence.forEach((item, index, array) => {
        let nextItem = array[index + 1];

        if (item === nextItem - 1) {
            foundedSequence.push(item, nextItem);
            index++;
        } else {
            let newSequence = foundedSequence.length > MIN_QTY_IN_SEQUENCE ?
                convertToGivenString(foundedSequence) : takeExistValue(foundedSequence, item);
            convertedSequence.push(newSequence);
            foundedSequence.length = 0;
        }
    });
    return convertedSequence.toString();
}

function convertToGivenString(sequence) {
    return `${sequence[0]}-${sequence[sequence.length - 1]}`;
}

function takeExistValue(sequence, currentItem) {
    return (sequence.length ? Object.values(sequence) : null) ?? currentItem;
}

console.log(convertSequence([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
