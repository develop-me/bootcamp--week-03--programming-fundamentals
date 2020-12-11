# Day 4: Morning

# Objects

- Objects are unordered collections of values.
- Examples:
    - empty object
    - address
    - person with address object
- When written out it's an "object literal"
- Dot notation to read/set
    - Nested dot notation
- Can add new properties after created
- Array-like notation
    - Can be used for invalid naming
    - Most useful for using variable to access different properties
- Functions as values: **methods** - (`maths.js`)
- Already used methods with arrays (`.sort()`, etc.)
- Methods **are** properties - so name can't be same as other properties
- `this` keyword: access value in object (`mark.js`)
- Methods often don't take arguments - data stored on the object
- `map`, `filter`, and `reduce` with objects (without destructuring)


## Standard library:

- Strings:
    - `.length`
    - `.charAt(index)`
    - `.substring(start, endBefore)`
    - `.search("blah")` - index if found or `-1`
    - `.toLowerCase()`
    - `.toUpperCase()`
    - `.split(" ")` - with space
    - `.split(", ")`
    - `Array.from("wombat")` - to split on characters
- Date
    - `new Date()` - now
    - `new Date("2018-08-24")` - specific date
    - `.getFullYear()`
    - `.getDate()`
    - `.getDay()`
    - `.getMonth()` - Aaaaargh!
    - `.getTime()`
    - Moment library generally better
- Math
    - `.PI`
    - `.E`
    - `.floor()`
    - `.ceil()`
    - `.round()`
    - `.sqrt()`
    - `.pow()`
    - `.log()`
    - `.cos()`
