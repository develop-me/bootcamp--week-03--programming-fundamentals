// Create a function, `timesBy`, that takes an array of numbers and a number as arguments. Using `.map()` return a new array containing each number in the array multiplied by the value of the second argument.

let timesBy = (values, multiplier) => {
    // time each value by multiplier
    // we couldn't put the mapped function outside of timesBy
    // as it relies on the value of multiplier
    // which is only available inside timesBy
    return values.map(n => n * multiplier);
};

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4], 5), // [10, 15, 20]
    timesBy([2, 3, 4, 5, 6, 7], -5), // [-10, -15, -20, -25, -30, -35]
    timesBy([-3, -4, -5, -6], -5), // [15, 20, 25, 30]
);
