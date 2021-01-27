// Create a function, `average3`, that takes three numbers as arguments. The function should return the average of the numbers.

let average3 = function (a, b, c) {
    // add them up first
    // then divide by 3
    // brackets are necessary
    // otherwise it will divide c by 3 first
    return (a + b + c) / 3;
};

console.log(
    average3(1, 2, 3), // 2
);
