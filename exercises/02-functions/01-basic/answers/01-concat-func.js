// Create a function, `concat`, that takes two strings as arguments. The function should return the two strings joined together with a space in between.

// accept two strings as arguments
let concat = function (str1, str2) {
    // concatenate them together
    return str1 + " " + str2;
};

// in JS the concat function is the same as the add function

console.log(concat("fish", "sticks")); // "fish sticks"
console.log(concat("hello", "world")); // "hello world"
