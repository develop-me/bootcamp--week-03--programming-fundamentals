// Write some code that lists all multiples of 13 up to 1,000 using a `while` loop

// start counter at 13
let count = 13;

// keep going while count is less than 1000
while (count < 1000) {
    // log the current value of count
    console.log(count);

    // add 13 to count
    count += 13;

    // if you put console.log here it would go from 26 to 1001
}

// so here count would be 1001
// it's fairly common to accidentally go over by one with a while loop
// so always check it runs the right number of times!
