// Create a function, `palindrome`, that take a string as an argument. Return `true` if the given string is a palindrome (i.e. the same forwards as backwards).

// use the reverse word function from a few challenges back
let reverseWord = word => word.split("").reverse().join("");

// check if the reversed word is the same as the original word
// if it is then it's a palindrome
let palindrome = word => word === reverseWord(word);

console.log(palindrome("fish")); // false
console.log(palindrome("madam")); // true
console.log(palindrome("bolton")); // false
console.log(palindrome("minim")); // true
