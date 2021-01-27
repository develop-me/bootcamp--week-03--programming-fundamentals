// Write some code that outputs 50 lines so that, if the current line number is *n*, the output is the total of the first *n* odd numbers:

// keep track of the total
let total = 0;

// start at 1
// keep going until less than 100 (as 99 is the 50th odd number)
// increment by 2 every time to skip even numbers
for (let i = 1; i < 100; i += 2) {
    // update the total so far
    total += i;

    // log the total
    console.log(total);
}

// it turns out the cumulative total of the first n odd numbers is the same as n * n
