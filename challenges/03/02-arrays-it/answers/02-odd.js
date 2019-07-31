// Create a function, `odd`, that takes an array of numbers. Using `.filter()` return an array containing only the odd numbers.

let odd = values => {
    // only keep values that aren't divisble by 2
    return values.filter(value => value % 2 !== 0);
};

console.log(
    odd([1, 2, 3]), // [1, 3]
    odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);
