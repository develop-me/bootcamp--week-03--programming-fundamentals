# Array

## Exercises

- Create an array that contains the name of everyone in the class and then log it to the console

    ```javascript
    let folks = // your code here

    console.log(folks);
    ```

---

Copy the provided code and then add your own code in the `// ... your function here` bit. **Make sure you write a function for each challenge**.

You might be able to reuse functions you wrote yesterday for some of these exercises.

1) Create a function, `squares`, that takes an array of numbers as an argument. Return a new array containing the square of each number.

    ```javascript
    let squares = (values) => {
        // your code here
    };

    console.log(
        squares([2, 3, 4]), // [4, 9, 16]
        squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
    );
    ```

1) Create a function, `odds`, that takes an array of numbers. Return an array containing only the odd numbers.

    ```javascript
    let odds = (values) => {
        // your code here
    };

    console.log(
        odds([1, 2, 3]), // [1, 3]
        odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
    );
    ```


1) Create a function, `average`, that takes an array of numbers as an argument. Return the average value of all the numbers.

    ```javascript
    // ... your function here

    console.log(
        average([2, 3, 4, 5, 6]), // 4
        average([2, 3]), // 2.5
        average([10, 30]), // 20
        average([-4, -8, -9]), // -7
    );
    ```

1) Create a function, `oddSquares`, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is odd.

    ```javascript
    // ... your function here

    console.log(
        oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
        oddSquares([2, 3, 4]), // [9]
    );
    ```

1) Create a function, `double`, that takes an array of numbers as an argument. Return a new array containing each number doubled.

    ```javascript
    // ... your function here

    console.log(
        double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
        double([1, 2, 5]), // [2, 4, 10]
    );
    ```

1) Create a function, `timesBy`, that takes an array of numbers and a number as arguments. Return a new array containing each number in the array multiplied by the value of the second argument.

    ```javascript
    // ... your function here

    console.log(
        timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
        timesBy([2, 3, 4], 5), // [10, 15, 20]
        timesBy([2, 3, 4, 5, 6, 7], -5), // [-10, -15, -20, -25, -30, -35]
        timesBy([-3, -4, -5, -6], -5), // [15, 20, 25, 30]
    );
    ```

1) Create a function, `divisibleBy3s`, that takes an array of numbers. Return an array containing only the numbers that are divisible by 3.

    ```javascript
    // ... your function here

    console.log(
        divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
        divisibleBy3s([3, 4, 5, 9]), // [3, 9]
    );
    ```

1) Create a function, `largest`, that takes an array of numbers. Return the largest number.

    **Hint**: don't try and use `.sort()` (it won't do what you think) or `Math.max()` (that's cheating)

    ```javascript
    // ... your function here

    console.log(
        largest([2, 4, 6, 4, 7, 5]), // 7
        largest([-2, 4, 6, 4, 2, -7, 5]), // 6
        largest([-2, -4, -4, -7, -5]), // -2
    );
    ```

1) Create a function, `lowest`, that takes an array of numbers. Return the lowest number.

    **Hint**: don't try and use `.sort()` - it won't do what you think

    ```javascript
    // ... your function here

    console.log(
        lowest([2, 4, 6, 4, 7, 5]), // 2
        lowest([-2, 4, 6, -7, 5]), // -7
        lowest([-2, -4, -11, -8, -4, -7, -5]), // -11
    );
    ```

1) Create a function, `sumBoth`, that takes two arrays of numbers as arguments. Return the sum of all the numbers from both arrays.

    **Hint**: to avoid repeating code, you might want to write a `sum` function that adds up the values in a *single* array and call that inside `sumBoth`

    ```javascript
    // ... your function here

    console.log(
        sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
        sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
    );
    ```

1) Create a function, `squaresDivisbleBy3`, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is divisible by 3.

    ```javascript
    // ... your function here

    console.log(
        squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
    );
    ```
