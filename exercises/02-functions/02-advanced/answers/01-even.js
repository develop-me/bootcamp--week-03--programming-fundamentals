// Create a function, `even`, that takes a number as an argument. The function should return `true` if the number is even and `false` if it is odd.

let odd = number => number % 2 !== 0;

// if a number isn't odd, it's even
let even = number => !odd(number);

console.log(even(1)); // false
console.log(even(2)); // true
