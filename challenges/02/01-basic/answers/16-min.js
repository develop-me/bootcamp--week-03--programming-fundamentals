// Create a function `min`, that takes two numbers as arguments. The function should return the smallest of the numbers.

// the ternary operator can keep this really short
// better to use < rather than > than as
// it's more relevant to the context of finding the smaller number
let min = (a, b) => a < b ? a : b;

console.log(
    min(1, 2), // 1
    min(3, -2), // -2
    min(-3, -5), // -5
);
