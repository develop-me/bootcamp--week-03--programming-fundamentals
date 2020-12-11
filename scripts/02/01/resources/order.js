// greet takes one argument
// multi-line, so we need curly-brackets
let greet = name => {
    // get the current hour of the day
    let hour = new Date().getHours();

    if (hour < 12) {
        return "Good morning " + name;
    } else if (hour < 18) {
        return "Good afternoon " + name;
    }

    // when a function returns a value it stops running
    // so this will only ever run if the two return statements
    // above don't run
    return "Good evening " + name;
};

let greeting = greet("Mark");
console.log(greeting);
