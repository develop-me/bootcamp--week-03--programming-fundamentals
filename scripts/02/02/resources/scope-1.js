let x = 1;

let wtf = () => {
  x += 2;
  return x;
};

console.log(x); // ?
console.log(wtf()); // ?
console.log(x); // ?
