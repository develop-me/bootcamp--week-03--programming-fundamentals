// Create a function, `merge`, that takes two arrays as arguments. It should return a new array containing the elements of both arrays.

// use concat to merge the arrays
let merge = (first, second) => {
    // start with the values of the first array
    // go over each value of the second array
    // push each value into the new array
    return second.reduce((values, next) => {
        // push doensn't return anything useful
        values.push(next);

        // so need to return it on a separate line
        return values;
    }, first);
};

console.log(
    merge([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]), // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);
