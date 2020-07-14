# Day 1: Morning

## Intro

- Introduce yourself
- Any admin stuff (e.g. finishing early for childcare)
- What is programming?
    - As opposed to coding
        - Not to devalue non-programming coding
    - Giving computers instructions
    - Programming is a skill that takes a lot of practice to get good at, but everyone can do it
    - Send round link to [Things I Don't Know](https://overreacted.io/things-i-dont-know-as-of-2018/) - Dan Abramov, creator of Redux (hardest thing on the course), explains all the things he doesn't know
- Ice breaker
    - Anyone done any before?
- A lot of material to cover in one day


## Programming Fundamentals

- Node
    - REPL
    - Script mode
    - `console.log()`
    - Errors
        - Error in file
        - Module not found
    - Command-line Fu
        - `ls`
        - `pwd`
        - Up arrow for previous command
        - Tab to auto-complete

- Key Concepts:
    - Types: Sorts of things
    - Variables: Remembering things
    - Conditionals: Deciding things
    - Loops: Repeating things

- **But first**: Hello, World example



## Basic Types

- Numbers
    - Examples:
        - Integer
        - Negative
        - Decimal
        - Scientific
        - `Infinity`
        - `0`
        - `-0`
    - Operators
        - Addition
        - Subtraction
        - Division
        - Multiplication
        - Modulus
    - BIDMAS / Brackets
    - Exercises: `4 % 3`, `0.1 + 0.1`, `0.1 + 0.2`, `0.2 * 0.2`

- Strings
    - Examples:
        - double quotes
        - single quotes
        - spaces
    - The empty string
    - String literals
    - Concatenation: *need to include spaces*

- Numbers & Strings
    - Examples
        - Number `+` Number
        - Number `+` String of Number
        - String of Number `+` Number
        - Number `/` String
    - Using `+` to **cast** to number: coming from DOM
    - Exercises:
        - '10' + 5
        - '10' + '5'
        - 10 + 5
        - '10' - 5


## Variables

- Way of storing a **value** to use it later
- Can give it a name to make code more readable
- Need to **declare** a variable with `let`
- Then **assign** a value
    - If don't assign a value then `undefined`
- Can then use the values
- Generally **declare and assign at same time**
- Can reassign a value later
- Variable types:
    - `let`
    - `const`
    - `var`
- Naming variables
    - Pick a sensible name
        - Not too short
        - Not too long
        - Descriptive
    - Can contain:
        - alphanumeric characters
        - underscores
        - the dollar sign
    - Can't:
        - contain spaces
        - contain hyphens
        - start with a number
        - be a reserved word (demonstrate syntax highlighting in VS Code)
    - use camel-case (as opposed to snake-case): convention
    - Exercies:
        - `age`
        - `my-name`
        - `1stPerson`
        - `for`
        - `FavouritePodcast`
        - `favourite food`
        - `helloTo`
        - `$`
- **Shorthand assignment operators**:
    - `+=`
    - `*=`
- Template strings: include variables/code in a string *interpolation* (In VS Code)
    - Tidier than concatenation


## Comments

- `// blah`
- `/* blah */`
- Comments should **not** explain what code *does*, hopefully that should be obvious
- Comments are for **explaining unusual things** - more *why* than *what*


## **Student Exercises**
