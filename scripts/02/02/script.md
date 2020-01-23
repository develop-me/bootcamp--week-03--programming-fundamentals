# Day 2: Afternoon

## Advanced Functions

### Scope

- The visibility of variables
- Global scope
- `let` and `const` are **block scoped**
- *Parameters* and `var` are always scoped to the function they belong to
- Functions also count as blocks
- Variables created without declaring them will go into **global** scope
- Examples

---

**Optional: don't cover if they're struggling**

### Function Composition

- Don't touch functions once you've written them
- Black boxes
- Complexity from simplicity

### Pure Functions

- Same input gives same outputs every time
- No side effects
- Examples:
    - Add
    - Shock: `a + "!"`
    - Greet
    - Random
    - `console.log()`
    - `divisibleBy3Square()`

### Recursion

- A function can call itself, creating a looping structure
- Show `factorial` example
    - **Don't forget base case**: `if (num === 1) { return 1; }`
- "In order to understand recursion, one must first understand recursion"
