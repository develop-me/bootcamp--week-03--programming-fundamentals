// With the help of your `prime` function, write a function that tells you the `n`th prime number:

// factorOf function from earlier
let factorOf = (a, b) => b % a === 0;

// prime function from earlier
let prime = n => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i * i <= n; i += 1) {
        if (factorOf(i, n)) {
            return false;
        }
    }

    return true;
};

let nthPrime = n => {
    // i is going to go up through every number from 2 up
    // set to 1 initially as we increment i at the start of the loop
    let i = 1;

    // count keeps track of how many primes we've found
    let count = 0;

    // keep going until we find n primes
    while (count < n) {
        // increment i
        // if we do it after the check our end result will be
        // one more than we want
        i += 1;

        // if the number is prime, add one to count
        if (prime(i)) {
            count += 1;
        }
    }

    return i;
};

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);