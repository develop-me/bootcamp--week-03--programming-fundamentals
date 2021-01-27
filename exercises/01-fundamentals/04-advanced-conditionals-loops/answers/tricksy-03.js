// Write some code that outputs the first 15 times-tables

// we need to create a 2D table - so we'll need two loops
// the outer loops keeps track of the row
for (let i = 1; i <= 15; i += 1) {
    // a string that will keep track of the current line
    // if we console.log() inside the inner loop
    // we'd get 225 lines of output, but we only want 15
    let line = "";

    // the inner loop keeps track of the column
    for (let j = 1; j <= 15; j += 1) {
        // multiple i and j and then add the tab character
        // concatente with line so far
        line += (i * j) + "\t";
    }

    // log out each line once its been constructed
    console.log(line);
}
