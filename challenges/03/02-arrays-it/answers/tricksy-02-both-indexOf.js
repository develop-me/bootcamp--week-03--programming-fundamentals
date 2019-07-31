// Create a function, `both`, that takes two arrays. Return a new array containing any value that is in both arrays.

let both = (first, second) => {
    // go over each value in the first array
    // keep it if the second array contains the value
    // we can't pull the mapped function out of both
    // as it needs access to second, which is scoped to both
    return first.filter(value => second.indexOf(value) !== -1);
}

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);
