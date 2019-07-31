// Create a function, `odd`, that takes a number as an argument. The function should return `true` if the number is odd and `false` if it is even.

// check if the remainder of dividing by 2 is not 0
// if you did number % 1 it wouldn't work as all numbers are divisble by 1
let odd = number => number % 2 !== 0;

console.log(odd(1)); // true
console.log(odd(2)); // false
