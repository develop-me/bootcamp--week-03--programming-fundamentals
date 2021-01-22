// go from 1 to 100
for (let i = 1; i <= 100; i += 1) {
    // set to "Fizz" if divisible by 3, or empty string otherwise
    let output = (i % 3 === 0) ? "Fizz" : "";

    // concatentate "Buzz" if divisible by 5
    output += (i % 5 === 0) ? "Buzz" : "";

    // if output is empty string, show number
    console.log(output === "" ? i : output);
}
