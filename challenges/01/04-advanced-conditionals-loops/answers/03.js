// Write some code that outputs the sum of the first 117 multiples of either 3 or 7 (e.g. 3 + 6 + 7 + 9 + 12 + 14 + ...)

// keep track of number of multiples
let multiples = 0;

// keep track of cumulative total
let total = 0;

// a counter - goes up by 1 every time
let i = 1;

// use a while loop because we don't know how many times it will run
while (multiples < 117) {
    // if i is divisble by 3 or 7
    if (i % 3 === 0 || i % 7 === 0) {
        // we've found another multiple
        multiples += 1;

        // add the current number to total
        total += i;
    }

    // increment the counter
    i += 1;
}

// once the loop is done, total should be right
console.log(total);
