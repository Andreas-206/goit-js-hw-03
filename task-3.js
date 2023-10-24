function filterArray(numbers, value) {
    const array = [];
    for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] > value) {
        array.push(numbers[x]);
        }
    }
    return array;
}



console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// function filterArray(numbers, value) {
//     return numbers.filter(number => number > value);
// }

// У цьому коді ми використовуємо метод масиву "filter", який створює новий масив,
// що містить елементи, які задовольняють задану умову. 
// Умову ми задаємо функцією-стрілкою, яка перевіряє, чи кожен елемент більший за значення value.
// Метод filter автоматично створює новий масив з підходящими числами.