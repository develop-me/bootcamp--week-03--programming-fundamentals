// Create a function, `max`, that takes an array of numbers. Return the largest number.

let largest = values => {
    // keep track of the biggest number
    // start at first value in the array
    let biggest = values[0];

    // standard array loop
    // except starting at 1 so we don't compare the first
    // value to itself
    for (let i = 1; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // if current value is bigger than biggest
        if (current > biggest) {
            // set biggest to current as its bigger
            biggest = current;
        }
    }

    // have gone over every value by this point
    // return biggest number
    return biggest;
};

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, 2, -7, 5]), // 6
    largest([-2, -4, -4, -7, -5]), // -2
);
