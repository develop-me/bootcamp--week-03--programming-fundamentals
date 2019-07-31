// Create a function, `squares`, that takes an array of numbers as an argument. Return a new array containing the square of each number.

let squares = values => {
    // an array to store the squares in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // push the current value squared into the results array
        results.push(current * current);
    }

    // return results array
    return results;
};

console.log(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);
