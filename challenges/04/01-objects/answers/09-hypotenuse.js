// Create a function, `hypotenuse`, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse.

// use pythagoras to work out the hypotenuse
// using Math.pow(x, 2) to square, but could just do x * x
let hypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(
    hypotenuse(3, 4), // 5
);
