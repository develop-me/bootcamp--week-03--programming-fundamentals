// Create a function, `divisibleBy3`, that takes an array of numbers. Using `.filter()` return an array containing only the numbers that are divisible by 3.

// only keep values that are divisble by 3
let divisibleBy3s = values => values.filter(n => n % 3 === 0);

console.log(
    divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3s([3, 4, 5, 9]), // [3, 9]
);
