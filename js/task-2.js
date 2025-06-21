// Напиши функцію під назвою makeArray,
// яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число).
// Функція повинна створювати новий масив,
//  який містить усі елементи з firstArray,
// а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength,
//  функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// ===================================================================================
const makeArray = function (firstArray, secondArray, maxLength) {
  const newArr = firstArray.concat(secondArray);

  if (newArr.length > maxLength) {
    return newArr.slice(0, maxLength);
  } else {
    return newArr;
  }
};

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
