// Create a function, `squaresDivisbleBy3`, that takes an array of numbers as an argument. Using `.map()` *and* `.filter()` return a new array containing the squares of each number, but only if the square is divisible by 3.

// create a new array with each value squared
// filter out any that aren't divisble by 3
let squaresDivisibleBy3 = values => values.map(n => n * n).filter(n => n % 3 === 0);

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);
