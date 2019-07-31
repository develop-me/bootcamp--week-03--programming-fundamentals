// Create a function, `skip`, that takes two numbers, `skip` and `max`. The function should return the total of the numbers from 1 to `max` excluding any numbers divisible by `skip`.

let skip = (factor, max) => {
    // keep track of the total so far
    let total = 0;

    // go over every number from 1 to max (including max)
    for (let i = 1; i <= max; i += 1) {
        // if factor doesn't divide into i with no remainder
        if (i % factor !== 0) {
            // add to running total
            total += i;
        }
    }

    // return the total at the end
    return total;
};

console.log(
    skip(4, 20), // 150
);
