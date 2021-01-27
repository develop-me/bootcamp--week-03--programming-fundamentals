// Create a function, `average`, that takes an array of numbers as an argument. Return the average value of all the numbers.

let average = values => {
    let sum = 0;

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // add the current value to sum
        sum += current;
    }

    // divide the sum by the number of items in the array
    return sum / values.length;
};

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
);
