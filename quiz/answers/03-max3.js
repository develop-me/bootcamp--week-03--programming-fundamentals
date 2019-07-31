// max function for two values
let max = (a, b) => a > b ? a : b;

// first find the max of the first two values
// then find the max of that value and the third value
let max3 = (a, b, c) => max(max(a, b), c);

// Answer by Tom from Cohort #11

let result = max3(1, 2, 3);
console.log("Expected: 3, Actual: " + result);

result = max3(3, 1, 2);
console.log("Expected: 3, Actual: " + result);

result = max3(2, 3, 1);
console.log("Expected: 3, Actual: " + result);

result = max3(7, -7, 14);
console.log("Expected: 14, Actual: " + result);

result = max3(-128, 128, 0);
console.log("Expected: 128, Actual: " + result);
