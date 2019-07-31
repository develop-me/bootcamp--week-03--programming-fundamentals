// Create a function, `sumBoth`, that takes two arrays of numbers as arguments. Using `.reduce()` return the sum of all the numbers from both arrays.

// an add function
let add = (a, b) => a + b;

// use reduce to add each array individually
// then use it again to add the two results together
let sumBoth = (first, second) => add(first.reduce(add, 0), second.reduce(add, 0));

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);

// Answer by Tom from Cohort #11
