// Create a function, `roots`, that takes an array of numbers. The function should return an array of the square roots of each number:

// we can pass Math.sqrt directly as our mapping function
// it's just a function that takes a value and returns the square root
let roots = values => values.map(Math.sqrt);

console.log(
    roots([4, 16, 2500]), // [2, 4, 50]
);
