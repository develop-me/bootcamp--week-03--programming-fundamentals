# Day 1: Morning Continued

## Basic Logic

- Boolean logic: `true` and `false`
- **Don't use quotes!** (`let fakeNews = "false"``)
- Equality:
    - `===`: same type, not same type
    - `<`
    - `>`
    - `<=`
    - `>=`
    - `!==`
    - `==`: type coercion
    - Exercises:
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
