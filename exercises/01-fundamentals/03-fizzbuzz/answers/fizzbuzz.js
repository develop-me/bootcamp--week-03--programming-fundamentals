// go from 1 to 100
for (let i = 1; i <= 100; i += 1) {
    // keep track of output
    let output = "";

    // if divisible by 3 concatentate "Fizz" onto output
    if (i % 3 === 0) {
        output += "Fizz";
    }

    // if divisible by 5 concatentate "Buzz" onto output
    if (i % 5 === 0) {
        output += "Buzz";
    }

    // if output is empty string it wasn't divisble by 3 or 5
    // so just output the number
    // otherwise output the string
    // which will be "Fizz", "Buzz", or "FizzBuzz"
    console.log(output === "" ? i : output);
}