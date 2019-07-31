// Create a function, `prime`, that takes a number as an argument. The function should return `true` if the number is prime and `false` if it is not. You might want to use your `factorOf` function from before.

// use the factorOf function from before
let factorOf = (a, b) => b % a === 0;

let prime = n => {
    // 1 is not prime by definition
    // so just return false if n is 1
    if (n === 1) {
        return false;
    }

    // go over every value from 2 up to the square root of the number
    // factors come in pairs, which switch at the square root
    // so no point checking beyond
    for (let i = 2; i * i <= n; i += 1) {
        // if i is a factor of n then n can't be prime
        // prime numbers don't have factors other than 1 and n
        if (factorOf(i, n)) {
            // so return false
            // kills the loop immediately
            return false;
        }
    }

    // if we've got here, we can't have found any factors
    // so the number must be prime
    return true;
};

console.log(
    prime(1), // false
    prime(2), // true
    prime(3), // true
    prime(4), // false
    prime(7), // true
    prime(15), // false
    prime(85), // false
    prime(257), // true
    prime(5119), // true
    prime(5121), // false
    prime(17523), // false
    prime(15487319), // true
);