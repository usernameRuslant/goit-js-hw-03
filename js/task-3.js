// Напиши функцію filterArray(numbers, value),
//  яка приймає масив чисел (numbers) та значення (value) як параметри.
//  Функція повинна повертати новий масив
// лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
//=====================================================================================
const filterArray = function (numbers, value) {
  const newArr = [];
  for (const number of numbers) {
    if (number > value) {
      newArr.push(number);
    }
  }
  return newArr;
};

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
