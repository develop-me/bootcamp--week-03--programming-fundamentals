// Create a function, `hello`, that takes a string as an argument. The function should return the string "hello *name*".

// using template strings
let hello = name => `hello ${name}`;

let first = "alice";
console.log(hello(first)); // "hello alice"

let second = "bob";
console.log(hello(second)); // "hello bob"
