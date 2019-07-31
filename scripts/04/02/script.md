# Day 4: Afternoon

## Advanced Object Techniques

- Destructuring: pull property values out of an object and into variable
    - variable declarations
    - function parameters
    - assign new name with destructuring
- Spread operator
    - Copy objects
    - Change whilst copying
    - Merge objects
    - Show complex nested example
- `Object.keys(obj)` and `Object.values(obj)`
    - Useful when using objects as an array - for quick access
    - Sometimes called a "Map"
- `map`, `filter`, and `reduce` with objects
    - without destructuring
    - with destructuring


## Classes

- Classes let us create objects with the same structure/methods (convert `mark.js`)
- Object **instances** (as opposed to literals)
- Examples:
    - Book: title, author on creation, price set to null, `getPrice` and `setPrice`
    - Good practice to use methods to access property values
- Returning `this`
    - From *setter* methods: e.g. `Book`'s `.setPrice()` method
    - Show chaining
    - Only makes sense from methods without a sensible return value
