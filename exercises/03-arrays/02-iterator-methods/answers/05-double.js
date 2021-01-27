// Create a function, `double`, that takes an array of numbers as an argument. Using `.map()` Return a new array containing each number doubled.

// for each value, times it by 2
let double = values => values.map(n => n * 2);

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);
