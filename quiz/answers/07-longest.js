let longest = words => {
    // reduce over words
    return words.reduce((longest, currentWord) => {
        // if currentWord is longer return it
        // otherwise keep longest word so far
        return currentWord.length > longest.length ? currentWord : longest;
    }, words[0]);
};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);
