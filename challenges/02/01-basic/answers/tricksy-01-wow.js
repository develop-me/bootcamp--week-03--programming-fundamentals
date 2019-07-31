// Create a function, `wow`, that takes a number, `n`, as an argument. The function should return the word "Wo...ow", where there are `n` "o"s.

let wow = n => {
    // an empty string that we will add "o"s to
    let oh = "";

    // use a loop to concatenate an additional "o" n times
    for (let i = 0; i < n; i += 1) {
        oh += "o";
    }

    // add the "w"s to either end before returning
    return "W" + oh + "w";
};

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"