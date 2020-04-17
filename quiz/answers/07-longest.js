let longer = (first, second) => {
    // return the longer of the two strings
    return first.length > second.length ? first : second;
};

let longest = words => {
    // reduce over words using longestWord
    return words.reduce(longer, words[0]);
};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);
