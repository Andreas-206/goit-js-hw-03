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