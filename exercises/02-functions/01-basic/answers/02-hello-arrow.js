// Create a function, `hello`, that takes a string as an argument. The function should return the string "hello *name*".

// using template strings
let hello = name => `hello ${name}`;

console.log(hello("alice")); // "hello alice"
console.log(hello("bob")); // "hello bob"
