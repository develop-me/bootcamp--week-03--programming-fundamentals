// Create a function, `factorOf`, that takes two numbers as arguments. The function should return `true` if the first number is a factor of the second number (i.e. the second number divided by the first has no remainder) and `false` if not.

// divide the number by the possible factor
// if the remainder is 0 then it divides, so it is a factor
let factorOf = (factor, number) => number % factor === 0;

console.log(factorOf(2, 16)); // true
console.log(factorOf(3, 16)); // false
