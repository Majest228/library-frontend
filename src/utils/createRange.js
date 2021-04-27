/**
 * Возвращает массив чисел, содержащий в себе `2 *offset + 1` значений.
 * Значения лежат в интервале `[0; max)`.
 * В том случае, если чисел в массиве не хватает, добавляет их в начало или в конец массива.
 * @param {number} value Стартовое значение
 * @param {number} offset Количество чисел, которые необходимо добавить по краям от стартового значечния
 * @param {number} max Максимальное значение
 * @returns {number[]}
 */
export const createRange = (value, offset, max) => {
    const numbers = [value];
    for (let index = 1; index <= offset; index++) {
        numbers.unshift(value - index);
        numbers.push(value + index);
    }

    const range = numbers.filter(number => (number >= 0 && number < max));
    const missing = Math.min(offset * 2 + 1, max) - range.length;

    if (missing > 0) {
        const head = range[0];
        const tail = range[range.length - 1];

        for (let index = 1; index <= missing; index++) {
            if (value - offset < 0) {
                range.push(tail + index);
            }
            if (value + offset >= max) {
                range.unshift(head - index);
            }
        }
    }

    return range;
};
