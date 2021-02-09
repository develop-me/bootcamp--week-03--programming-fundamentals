// Create a function, `squares`, that takes an array of numbers as an argument. Return a new array containing the square of each number.

let squares = values => {
    // an array to store the squares in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // push the current value squared into the results array
        results.push(current * current);
    }

    // return results array
    return results;
};

let twoToFour = [2, 3, 4];
console.log(squares(twoToFour)); // [4, 9, 16]

let twoToSix = [2, 3, 4, 5, 6];
console.log(squares(twoToSix)); // [4, 9, 16, 25, 36]
