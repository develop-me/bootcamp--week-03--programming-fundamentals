// Create a function, `divisibleBy3`, that takes a number as an argument. The function should return `true` if the number is divisible by 3 and `false` if it isn't.

// we don't need a conditional because an equality check
// always returns true or false
let divisibleBy3 = number => number % 3 === 0;

console.log(divisibleBy3(3)); // true
console.log(divisibleBy3(4)); // false
