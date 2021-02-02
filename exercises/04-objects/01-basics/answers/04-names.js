// Create a function, `names`, that takes an array of objects as an argument. Return a string containing all of the object `name`s separated by a comma.

// use map to get an array of names
// then join the array of names using the array join method
let names = people => people.map(person => person.name).join(", ");

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };

    let people = [a, b, c];

    console.log(
        names(people), // "Alice, Bob, Charlie"
    );
})();
