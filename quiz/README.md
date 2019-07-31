# Quiz

## Rules

- If you get stuck on one for more than 15 minutes, try a different one and come back to it later.
- Feel free to vent any frustration using interpretive dance.

---

## Brain Code


1. Why do these yield different results?

    ```javascript
    "1" + 2 +  3 ; // Equals "123"
     3  + 2 + "1"; // Equals "51"
     3  + 2 +  1 ; // Equals 6
    ```

Work out the answers to the following without running the code. Once you've worked out the answer, run the code in node to check that you're right.


2. What does `foo` equal?

    ```javascript
    let bar = 12;
    let foo = bar > 10 ? bar : 15;

    console.log(foo); // ??
    ```


3. What does `x` equal?

    ```javascript
    let x  = 12;

    let add = function (x) {
            x += 12;
            return x;
        };

    add(x);

    console.log(x); // ??
    ```


4. What does `x` equal?

    ```javascript
    let x  = 12;

    let add = function () {
            x += 12;
            return x;
        };

    add(x);

    console.log(x); // ??
    ```

---

Copy the boilerplate provided for each problem into a new JS file. Fill in the `// your code here` section and make sure that you get the expected answers for each one.

1. In ping-pong the person who is serving changes every five plays. Write a function that takes the current score of each player and return `true` if it is time to change server and `false` if not.

    ```javascript
    let changeServer = (player1, player2) => {
        // your code here
    };

    let result = changeServer(5, 0);
    console.log("Expected: true, Actual: " + result);

    result = changeServer(5, 3);
    console.log("Expected: false, Actual: " + result);

    result = changeServer(9, 6);
    console.log("Expected: true, Actual: " + result);

    result = changeServer(17, 8);
    console.log("Expected: true, Actual: " + result);

    result = changeServer(16, 8);
    console.log("Expected: false, Actual: " + result);
    ```

2. Write a function, `multiply` that takes two **positive** numbers and multiplies them together... however, **you aren't allowed to use `*` or `/` or `Math`**:


    ```javascript
    let multiply = (x, y) => {
        // your code here
    };

    let result = multiply(5, 0);
    console.log("Expected: 0, Actual: " + result);

    result = multiply(5, 3);
    console.log("Expected: 15, Actual: " + result);

    result = multiply(9, 6);
    console.log("Expected: 54, Actual: " + result);

    result = multiply(17, 8);
    console.log("Expected: 136, Actual: " + result);

    result = multiply(16, 8);
    console.log("Expected: 128, Actual: " + result);
    ```

3. Write a function `max3` that takes three numbers and returns the largest number. You're not allowed to use `Math.max`:

    ```javascript
    let max3 = (a, b, c) => {
        // your code here
    };

    let result = max3(1, 2, 3);
    console.log("Expected: 3, Actual: " + result);

    result = max3(3, 1, 2);
    console.log("Expected: 3, Actual: " + result);

    result = max3(2, 3, 1);
    console.log("Expected: 3, Actual: " + result);

    result = max3(7, -7, 14);
    console.log("Expected: 14, Actual: " + result);

    result = max3(-128, 128, 0);
    console.log("Expected: 128, Actual: " + result);
    ```


4. Write a function that takes a number, `n`, as an argument. Return the sum of all values from 1 to `n`.

    ```javascript
    let sumToN = n => {
        // your code here
    };

    let result = sumToN(4);
    console.log("Expected: 10, Actual: " + result);

    result = sumToN(100);
    console.log("Expected: 5050, Actual: " + result);

    result = sumToN(123456789);
    console.log("Expected: 7620789436823655, Actual: " + result);
    ```

5. Find the secret message by writing a function that creates a string from every 7th character of the code:

    **Hint**: the secret message is not gibberish

    ```javascript
    let crack = code => {
        // your code here
    };

    const cracked = crack("_5X4EjG4Cm9#Eo 8Dd@Cov_6kNhdk6W8_J .hZ3yTwr6JZ#qoD.74mErj7 2Wbk_wEUx8.X7.v_. D9@Hq Y3Nu.7aot5Ay.8u.Z339z T!98NrdzD@7C2iJ.jf 8d.Upf6X r7P@BSi#xN7H t!YGp8h!5_SygM");

    console.log(cracked);
    ```


6. Write a function, `minmax`, that takes an array of numbers and returns the smallest value plus the largest value in the array:

    ```javascript
    let minmax = values => {
        // your code here
    };

    let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
    console.log("Expected: 13, Actual: " + result);

    result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
    console.log("Expected: 25, Actual: " + result);

    result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
    console.log("Expected: -31, Actual: " + result);

    result = minmax([4]); // should work out 4 + 4
    console.log("Expected: 8, Actual: " + result);
    ```

7.  Write a function, `longest`, that takes an array of strings and returns the longest string:

    ```javascript
    let longest = words => {
        // your code here
    };

    let result = longest(["cow", "wombat", "aardvark"]);
    console.log("Expected: aardvark, Actual: " + result);

    result = longest(["fish", "fishiest", "fishier"]);
    console.log("Expected: fishiest, Actual: " + result);
    ```

8. Write function that translates a string to Pig Latin. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

    ```javascript
    let pigLatin = str => {
        // your code here
    };

    let result = pigLatin("The quick brown fox");
    console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

    result = pigLatin("The secret plans are in the bunker");
    console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);

    result = pigLatin("How now brown cow"); // true
    console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);
    ```

9. Write a function that takes two object literals and returns `true` if they have the same value for their `name` **or** `value` properties:

    ```javascript
    let comparePeople = (a, b) => {
        // your code here
    };

    (() => {
        let first = {
            name: "age",
            value: 36,
        };

        let second = {
            name: "cars",
            value: 56,
        };

        let third = {
            name: "age",
            value: 56,
        };

        let result = comparePeople(first, second);
        console.log("Expected: false, Actual: " + result);

        result = comparePeople(first, third);
        console.log("Expected: true, Actual: " + result);

        result = comparePeople(second, third); // true
        console.log("Expected: true, Actual: " + result);
    })();
    ```

10. Create a class that represents a `Wombat`

    - You should be able to give the wombat a name when you create it.
    - The wombat should have a `.getName()` method that returns its name
    - The wombat should have a `.sayHelloTo(wombat)` method that you pass another wombat to and it will return a greeting
    - The wombat should have a `.giveHug()` method and a `.howManyHugs()` method. `.howManyHugs()` should return the number of hugs the wombat has been given

    ```javascript
    /*
     * Your Wombat creation code here
     */

    let tish = new Wombat("Tish");
    let fonny = new Wombat("Fonny");

    let tishName = tish.getName();
    console.log("Expected: Tish, Actual: " + tishName);

    let greeting = tish.sayHelloTo(fonny);
    console.log("Expected: Hello Fonny, Actual: " + greeting);

    tish.giveHug();
    console.log("Expected: 1, Actual: " + tish.howManyHugs());

    fonny.giveHug().giveHug().giveHug();
    console.log("Expected: 3, Actual: " + fonny.howManyHugs());
    ```
