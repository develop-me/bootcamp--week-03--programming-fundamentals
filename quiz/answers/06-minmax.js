let minmax = values => {
    // set min and max to the first value in the array
    let min = values[0];
    let max = values[0];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        let current = values[i];

        // if the current value is smaller than min then update it
        if (current < min) {
            min = current;
        }

        // if the current value is bigger than max then update it
        if (current > max) {
            max = current;
        }
    }

    // add them together
    return min + max;
};

/*
    // Or using reduce
    let minmax = values => {
        let min = values.reduce((a, b) => a < b ? a : b, values[0]);
        let max = values.reduce((a, b) => a > b ? a : b, values[0]);
        return min + max;
    };
*/

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4
console.log("Expected: 8, Actual: " + result);
