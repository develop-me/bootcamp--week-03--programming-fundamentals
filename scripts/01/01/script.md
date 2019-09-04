# Day 1: Morning

## Intro

- Introduce yourself
- Ice breaker
- What is programming?
- Anyone done any before?
- Programming is a skill that takes a lot of practice to get good at, but everyone can do it
- A lot of material to cover in one day


## Programming Fundamentals

- Node
    - REPL
    - Script mode
    - Errors
        - Error in file
        - Module not found
    - `console.log()`
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
        - Number `+ `String of Number
        - String of Number `+` Number
        - Number `+` String of Word
        - Number `*` String
    - Using `+` to **cast** to number: coming from DOM
    - Exercises


## Variables

- Demonstrate in **VS Code**
- Way of storing a **value** to use it later
- Can give it a name to make code more readable
- Need to **declare** a variable with `let`
- Then **assign** a value
    - If don't assign a value then `undefined`
- Can reassign a value later
- Can then use the values
- Generally **declare and assign at same time**
- Variable types:
    - `let
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
        - be a reserved word
    - use camel-case (as opposed to snake-case): convention
    - Exercies: (In VS Code)
        - `age`
        - `my-name`
        - `1stPerson`
        - `for`
        - `FavouritePodcast`
        - `favourite food`
        - `helloTo`
        - `$`
- Template strings: include variables/code in a string *interpolation* (In VS Code)
    - Tidier than concatenation


## Comments

- `// blah`
- `/* blah */`
- Comments shouldn't explain what code *does*, hopefully that should be obvious
- Comments are for explaining unusual things - more *why* than *what*
