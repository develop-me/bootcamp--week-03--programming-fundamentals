// Create a function, `titleCase`, that takes a string and converts it to title case.

let titleCaseWord = word => {
    // uppercase the first letter
    let head = word.charAt(0).toUpperCase();

    // lowercase the rest of the word
    let tail = word.substring(1).toLowerCase();

    // concatenate them
    return head + tail;
};

let titleCase = string => {
    // split into an array of words
    let words = string.split(" ");

    // map over each item using titleCaseWord
    let titled = words.map(titleCaseWord);

    // join the array back into a string
    return titled.join(" ");
};

console.log(
    titleCase("hello, my name is Jim"), // "Hello, My Name Is Jim"
);
