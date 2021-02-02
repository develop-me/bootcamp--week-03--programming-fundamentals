// Create a function, `odd`, that takes an array of numbers. Return an array containing only the odd numbers.

let odds = values => {
    // an array to store the odd numbers in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // push into results array if its odd
        if (current % 2 !== 0) {
            results.push(current);
        }
    }

    // return results array
    return results;
};

console.log(
    odds([1, 2, 3]), // [1, 3]
    odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);
