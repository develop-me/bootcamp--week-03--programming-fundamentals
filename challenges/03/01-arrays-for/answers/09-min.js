// Create a function, `min`, that takes an array of numbers. Return the smallest number.

let min = values => {
    // keep track of the smallest number
    // start at first value in the array
    let smallest = values[0];

    // standard array loop
    // except starting at 1 so we don't compare the first
    // value to itself
    for (let i = 1; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // if current value is smaller than smallest
        if (current < smallest) {
            // set smallest to current as its smaller
            smallest = current;
        }
    }

    // have gone over every value by this point
    // return smallest number
    return smallest;
};

console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, -7, 5]), // -7
    min([-2, -4, -11, -8, -4, -7, -5]), // -11
);
