// Create a function, `daysSince`, that you pass a date. It should tell you how many days have passed since that date

let daysSince = dateString => {
    // get the current time
    let now = new Date();
    // convert the given date string into a date object
    let date = new Date(dateString);
    // the number of milliseconds in a day
    let millisecondsPerDay = 1000 * 60 * 60 * 24;

    // find difference in milliseconds and divide by milliseconds per day
    let differenceInDays = (now - date) / millisecondsPerDay;

    // round down
    return Math.floor(differenceInDays);
};

console.log(
    daysSince("1984-04-16"), // 12 thousand and something
);
