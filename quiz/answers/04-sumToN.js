let sumToN = n => {
    // keep track of the total
    let total = 0;

    // from 1 until n
    for (let i = 1; i <= n; i++) {
        // add the number to total
        total += i;
    }

    return total;
};

let result = sumToN(4);
console.log("Expected: 10, Actual: " + result);

result = sumToN(100);
console.log("Expected: 5050, Actual: " + result);

result = sumToN(123456789); // true
console.log("Expected: 7620789436823655, Actual: " + result);
