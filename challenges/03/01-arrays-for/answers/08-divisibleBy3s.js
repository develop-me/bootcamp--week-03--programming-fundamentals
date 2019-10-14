// Create a function, `divisibleBy3`, that takes an array of numbers. Return an array containing only the numbers that are divisible by 3.

let divisibleBy3s = values => {
    // empty arrray to store results in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // if current value is divisible by 3
        if (current % 3 === 0) {
            // push into results array
            results.push(current);
        }
    }

    // return results array
    return results;
};

console.log(
    divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3s([3, 4, 5, 9]), // [3, 9]
);
