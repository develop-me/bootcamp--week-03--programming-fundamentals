// Create a function, `sortNumbers`, that takes an array of numbers. Return an array so that the values are ordered numerically.

// sort compares all values with the given functions
// if the function returns 1 the first value should come first
// if the function returns -1 the second value should come first
let sortNumbers = values => values.sort((a, b) => a > b ? 1 : -1);

console.log(
    sortNumbers([1, 11, 3, 4, 34, 58, 9, 7]), // [1, 3, 4, 7, 9, 11, 34, 58]
);
