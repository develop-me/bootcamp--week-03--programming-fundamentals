// Create a function, `squaresDivisbleBy3`, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is divisible by 3.

let squaresDivisibleBy3 = values => {
    // empty arrray to store results in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // square the current value
        let squared = current * current;

        // if squared value is divisible by 3
        if (squared % 3 === 0) {
            // push into results array
            results.push(squared);
        }
    }

    // return results array
    return results;
};

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);
