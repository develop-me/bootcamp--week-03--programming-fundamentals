// Write some code that outputs any even numbers between 1 and 50 that are also divisible by 3

// only working with even numbers
// so start at 2 and increment by 2 each time
for (let i = 2; i < 50; i += 2) {
    // use modulus to find if i is divisible by 3
    // will have 0 remainder if it does
    if (i % 3 === 0) {
        // only log if it does have a remainder of 0
        console.log(i);
    }
}
