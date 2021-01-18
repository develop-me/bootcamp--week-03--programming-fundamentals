let x = 1;

let wtf = x => {
    x += 2;
    y = 5;
    return x;
};

console.log(x); // ?
console.log(wtf(2)); // ?
console.log(x); // ?
console.log(y); // ?
