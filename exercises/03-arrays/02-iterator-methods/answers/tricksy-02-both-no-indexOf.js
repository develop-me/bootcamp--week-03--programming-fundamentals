// Create a function, `both`, that takes two arrays. Return a new array containing any value that is in both arrays.

let both = (first, second) => {
    // go over each value in the first array
    return first.filter(firstValue => {
        // go over each value in the second array
        // some will return true if there are any matches
        return second.some(secondValue => {
            // will return true if there's a match
            return secondValue === firstValue;
        });
    });
};

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);
