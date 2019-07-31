// Create a function, `sumBoth`, that takes two arrays of numbers as arguments. Return the sum of all the numbers from both arrays.

let sum = values => {
    // keep track of sum
    let sum = 0

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // add the current value to sum
        sum += current;
    }

    return sum;
}

let sumBoth = (first, second) => sum(first) + sum(second);

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
);
