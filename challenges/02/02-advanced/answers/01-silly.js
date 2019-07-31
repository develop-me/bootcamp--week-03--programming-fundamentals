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

let silly = n => {
    // pass the initial value to times2
    let multiplied = times2(n);

    // then pass the returned value from that to add4
    let added = add4(multiplied);

    // then pass the returned value from that to divideBy6
    let divided = divideBy6(added);

    // then return the final value
    return divided;
};

console.log(
    silly(10), // 4
    silly(22), // 8
);
