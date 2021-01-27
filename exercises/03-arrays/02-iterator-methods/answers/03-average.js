// Create a function, `average`, that takes an array of numbers as an argument. Using `.reduce()` return the average value of all the numbers.

// a basic add function
let add = (a, b) => a + b;

let average = values => {
    // add up the values
    // use the existing add function
    let sum = values.reduce(add, 0);

    // divide by the length
    // can't always do everything inside the reduce
    return sum / values.length;
};

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
);
