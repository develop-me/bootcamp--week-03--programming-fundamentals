let x = 1;

let wtf = () => {
    let x = 2;
    let y = 5;
    return x;
};

console.log(x); // ?
console.log(wtf()); // ?
console.log(x); // ?
console.log(y); // ?
