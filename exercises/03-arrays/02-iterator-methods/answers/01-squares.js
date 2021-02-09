// Create a function, `squares`, that takes an array of numbers as an argument. Using `.map()` return a new array containing the square of each number.

let squares = values => {
    // for each value times it by itself
    return values.map(n => n * n);
};

let twoToFour = [2, 3, 4];
console.log(squares(twoToFour)); // [4, 9, 16]

let twoToSix = [2, 3, 4, 5, 6];
console.log(squares(twoToSix)); // [4, 9, 16, 25, 36]
