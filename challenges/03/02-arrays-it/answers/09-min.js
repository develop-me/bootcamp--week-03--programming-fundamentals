// Create a function, `min`, that takes an array of numbers. Using `.reduce()` return the smallest number.

// use an existing min function
let minValue = (a, b) => a < b ? a : b;

// start with the first item in the array
// then compare the biggest so far to current value
let min = values => values.reduce(minValue, values[0]);

console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, -7, 5]), // -7
    min([-2, -4, -11, -8, -4, -7, -5]), // -11
);
