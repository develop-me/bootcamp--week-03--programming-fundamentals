/*
    Create three functions:

        - `times2` should take one argument and multiply it by 2
        - `add4` should take one argument and add 4 to it
        - `divideBy6` should take one argument and divide it by 6

        Now, write a function `silly` that uses the three functions you've just created. It should take one argument and then times the value by 2, add 4 to it, and divide it by 6. The `silly` function shouldn't do any arithmetic itself.
*/

let times2 = n => n * 2;
let add4 = n => n + 4;
let divideBy6 = n => n / 6;

// call times2 and pass in n
// then call add4 with the result of that
// then call divideBy6 with the result of that
let silly = n => divideBy6(add4(times2(n)));

// this is called function composition
// it's one of the key ideas in functional programming

console.log(
    silly(10), // 4
    silly(22), // 8
);
