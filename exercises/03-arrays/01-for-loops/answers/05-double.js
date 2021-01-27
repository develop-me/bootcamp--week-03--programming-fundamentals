// Create a function, `double`, that takes an array of numbers as an argument. Return a new array containing each number doubled.

let double = values => {
    // empty arrray to store results in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // push doubled value into results array
        results.push(current * 2);
    }

    // return results array
    return results;
};

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);
