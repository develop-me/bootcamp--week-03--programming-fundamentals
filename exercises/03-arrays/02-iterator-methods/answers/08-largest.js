// Create a function, `max`, that takes an array of numbers. Using `.reduce()` return the largest number.

let largest = values => {
    // pass in the first value in the array as the initial value
    // compare the previously returned value with the current value
    // return whichever is bigger
    return values.reduce((biggest, current) => {
        if (current > biggest) {
            return current;
        }

        return biggest;
    }, values[0]);
};

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, 2, -7, 5]), // 6
    largest([-2, -4, -4, -7, -5]), // -2
);

/*
// a more elegant alternative
// take advantage of the fact that the function we pass to reduce
// is just the `max` function from Tuesday

// a function that takes two values and return the biggest
let max = (a, b) => a > b ? a : b;

// start with the first item in the array
// then compare the biggest so far to current value
let largest = values => values.reduce(max, values[0]);
*/
