// Create a function, `oddSquares`, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is odd.

let oddSquares = values => {
    // empty array to store results in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // square the current value
        let squared = current * current;

        // if the squared value is odd
        if (squared % 2 !== 0) {
            // push into the results array
            results.push(squared);
        }
    }

    // return results array
    return results;
};

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);
