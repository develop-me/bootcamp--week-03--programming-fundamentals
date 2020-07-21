# Day 3: Morning


## Arrays

- Data structures
- Arrays are ordered collections of values.
    - Empty array
    - Array of numbers
    - Array of strings
- Add items
    - `push`
    - `unshift`
- Getting values
    - `pop`
    - `shift`
    - square bracket syntax - doesn't mutate
- `.length`: "property"
- Iterating
    - use a `for` loop and `.length` along with square bracket notation
    - Examples:
        - adding up all numbers in an array
        - keep only even numbers
- An array is a *single* value
    - store in a single variable
    - when passed to a function it's a single argument
- Useful operations
    - `.sort()`: *alphabetic* sort (**destructive**)
    - `.reverse()`:  reverses (**destructive**)
    - `.concat(otherArr)`: merging two arrays
    - `.join(seperator)`: array to string
    - `.indexOf(term)`: index of first matching item, or `-1`
    - `.includes(term)`: does it exist in array, boolean
    - `.slice(start, finishBefore)`: part of an array
    - `.splice(start, numberOfItems)`: removes part of an array and returns remove parts (**destructive**)
- Spread operator:
    - copying an array
    - merging an array
    - add to beginning/end of copied array
