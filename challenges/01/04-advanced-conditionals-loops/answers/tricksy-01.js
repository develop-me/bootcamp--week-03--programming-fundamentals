// Every character on the keyboard has a "Character Code" associated with it: e.g. "A" is 65. We can use `String.fromCharCode(65)` to get back the letter "A".

// the character code for A
let aCode = 65;

// the character code for the character after z
// 26 letters in the alphabet
let stopCode = 65 + 26;

// start at the character code for A
// keep going as long as less than the character code for the letter after Z
for (let i = aCode; i < stopCode; i += 1) {
    // get the character
    let char = String.fromCharCode(i);

    // log it out
    console.log(char);
}
