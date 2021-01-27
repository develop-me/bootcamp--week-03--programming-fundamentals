// Write some code that outputs a cumulative total of the current line number for 1 to 50:

// variable to keep track of total
var total = 0;

// loop from 1 to 50
for (let i = 1; i <= 50; i += 1) {
    // add to our total each time
    total += i;

    // log the current total
    console.log(total);
}