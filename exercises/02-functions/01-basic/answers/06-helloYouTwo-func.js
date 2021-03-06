// Create a function, `helloYouTwo`, that takes two strings as arguments. The function should return the string "Hello *first-name* and *last-name*".

let helloYouTwo = function (name1, name2) {
    return "Hello " + name1 + " and " + name2;
};

console.log(helloYouTwo("Alice", "Bob")); // "Hello Alice and Bob"
console.log(helloYouTwo("Carol", "Dylan")); // "Hello Carol and Dylan"
