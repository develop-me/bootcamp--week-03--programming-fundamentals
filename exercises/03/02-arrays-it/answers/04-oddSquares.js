// Create a function, `oddSquares`, that takes an array of numbers as an argument. Using `.map()` *and* `.filter()` return a new array containing the squares of each number, but only if the square is odd.

// existing square function - square a value
let square = value => value * value;

// existing odd function - is a value odd
let odd = n => n % 2 !== 0;

// existing squares function
let squares = values => values.map(square);

// existing odds function
let odds = values => values.filter(odd);

// compose squares and odds
let oddSquares = values => odds(squares(values));

// Answer by Beth from Cohort #14
console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);
