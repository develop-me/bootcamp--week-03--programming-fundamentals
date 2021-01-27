// If you had a grid containing 100 items split into 12 columns, what column would the 77th item be in?

// if there are 12 columns then we can work out the column
// that item number 77 will be by seeing what the remainder
// is when you divide it by 12
// e.g. if you had a four column grid then the 3rd item would
// be in the 3rd column (3 % 4 = 3) as would the 7th item
// (6 % 4 = 3) and the 11th item (11 % 4 = 3)
let column = 77 % 12;
console.log(column); // 5
