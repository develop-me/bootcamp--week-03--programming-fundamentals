// Create a function `max`, that takes two numbers as arguments. The function should return the highest of the numbers.

// the ternary operator can keep this really short
// better to use > rather than < than as
// it's more relevant to the context of finding the bigger number
let max = (a, b) => a > b ? a : b;

console.log(
    max(1, 2), // 2
    max(3, -2), // 3
    max(-3, -5), // -3
);
