// Create a function, `sumBoth`, that takes two arrays of numbers as arguments. Using `.reduce()` return the sum of all the numbers from both arrays.

// an add function
let add = (a, b) => a + b;

// a sum function
let sum = arr => arr.reduce(add, 0);

// add the two sums together
let sumBoth = (first, second) => sum(first) + sum(second);

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);
