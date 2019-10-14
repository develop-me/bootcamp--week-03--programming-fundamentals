// Create a function, `min`, that takes an array of numbers. Using `.reduce()` return the smallest number.

// use an existing min function
let min = (a, b) => a < b ? a : b;

// start with the first item in the array
// then compare the biggest so far to current value
let lowest = values => values.reduce(min, values[0]);

console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, -7, 5]), // -7
    lowest([-2, -4, -11, -8, -4, -7, -5]), // -11
);
