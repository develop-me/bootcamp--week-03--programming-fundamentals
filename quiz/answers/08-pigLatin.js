// a function to pig latinise a single word
let pigLatiniseWord = word => {
    let head = word.charAt(0).toLowerCase();
    let tail = word.substring(1);
    return tail + head + "ay";
};

let pigLatin = str => {
    // splits the words by space
    let words = str.split(" ");

    // maps over using pigLatiniseWord
    // joins back into a string
    return words.map(pigLatiniseWord).join(" ");
};

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

result = pigLatin("The secret plans are in the bunker");
console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);
