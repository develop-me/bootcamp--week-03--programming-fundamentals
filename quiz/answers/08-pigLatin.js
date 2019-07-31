// a function to pig latinse a single word
let pigLatinseWord = word => {
    let head = word.charAt(0);
    let tail = word.substring(1);

    return tail + head + "ay";
}

let pigLatin = str => {
    // splits the words by space
    let words = str.toLowerCase().split(" ");

    // maps over using pigLatinseWord
    // joins back into a string
    return words.map(pigLatinseWord).join(" ");
};

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

result = pigLatin("The secret plans are in the bunker");
console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);
