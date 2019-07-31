// Create a function, `oddSquares`, that takes an array of numbers as an argument. Using `.map()` *and* `.filter()` return a new array containing the squares of each number, but only if the square is odd.

// existing square function - square a value
let square = value => value * value;

// existing odd function - is a value odd
let odd = n => n % 2 !== 0;

let oddSquares = values => {
    // get all the squares
    let squares = values.map(square);

    // filter out the even ones
    return squares.filter(odd);
};

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);
