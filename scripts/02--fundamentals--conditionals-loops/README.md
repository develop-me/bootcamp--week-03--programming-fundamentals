# Day 1: Afternoon

## Basic Logic

- Boolean logic: `true` and `false`
- **Don't use quotes!** (`let fakeNews = "false"`)
- Equality:
    - `===`: same type, not same type
    - `<`
    - `>`
    - `<=`
    - `>=`
    - `!==`
    - `==`: type coercion
    - Exercises:
        - "Ben" === "ben"
        - "12" === 12
        - 1/2 === 0.5
- Logic Rules
    - `and`: false if either value is false
    - `or`: true if either value is true
    - `not`: switches truth value - unary operator
    - Exercises:
        - `("ben" === "ben") && ("ben" === "Ben")`
        - `(12.00 === 12) || (3/5 === 0.75)`
        - `(50 >= -50) && (12 !== 12)`
        - `!(("12" - 2) >= 10) || !("ben" === "Ben")`


## Conditionals

- Only run code in certain situations
- Can use equality and logic rules to make decisions
- `if` statements
    - single `if`: may not run
    - `if` with `else`: one side always runs
    - `if` with `else if`
    - bit in brackets is "truth condition": evaluates to `true` or `false`
- Ternary operator
    - statement vs expression: expression equates to a value
    - `x === 10 ? true : false` same as `x === 10`
- Switch statements: checking same value
    - `default` on last line
    - need `break` on all but last line
- Exercise: `if.js`


## Indentation

- Every time you start a new code block `{` indent
- Every time you close a code block `}` outdent
- Trust your code editor
- Won't change how the program works, but makes it easier to find bugs
- Fix indentation straight away


## Loops

- Do something similar more than once
- `for` loop
    - The most common loop structure
    - When you need to loop a known number of times
    - Three parts:
        - setup a counter variable
        - loop condition: run while true
        - post-loop: usually increment by 1
- `while` loop
    - keep doing something until condition is false
    - useful if you don't know how many times it needs to run
- Infinite loops: be careful!


## FizzBuzz

- write some code that will output the numbers 1 to 100 in the console
- *unless* the number is divisible by 3, in which case output "Fizz"
- *or* the number is divisible by 5, in which case output "Buzz"
- *if* the number is divisible by 3 *and* 5, output "FizzBuzz"
