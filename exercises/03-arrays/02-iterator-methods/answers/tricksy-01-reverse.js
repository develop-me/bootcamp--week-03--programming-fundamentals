// Create a function, `reverse`, that takes an array of strings. Return a new array where each string is reversed.

// accept a word
let reverseWord = word => {
    // split it into an array of letters
    let letters = Array.from(word);
    // reverse the array of letters
    let reversed = letters.reverse();
    // join the array of letters together into a string
    // return the string
    return reversed.join("");
};

// map over each word using the reverseWord function
let reverse = values => values.map(reverseWord);

console.log(
    reverse(["fish", "bolton", "green"]), // ["hsif", "notlob", "neerg"]
);
