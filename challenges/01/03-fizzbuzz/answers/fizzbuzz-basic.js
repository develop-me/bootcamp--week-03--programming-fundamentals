// go from 1 to 100
for (let i = 1; i <= 100; i += 1) {
    // if divisible by 3 *and* 5
    // needs to come first as it's a stronger
    // condition than ones below
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    // if divisible by 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
    // if divisible by 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    // otherwise number
    } else {
        console.log(i);
    }
}
