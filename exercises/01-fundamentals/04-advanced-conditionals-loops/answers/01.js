// Write some code that outputs 50 lines, alternating between ☃☃☃ and ❄❄❄

// loop 50 times
for (let i = 0; i < 50; i += 1) {
    // if i is even
    if (i % 2 === 0) {
        // we can use unicode characters directly in our JS
        console.log("☃☃☃");
    // if i is odd
    } else {
        console.log("❄❄❄");
    }
}