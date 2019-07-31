/*
 * Create a Wombat
 */
class Wombat {
    // takes a name on creation
    constructor(name) {
        this.name = name;

        // set hugs to 0 initially :(
        this.hugs = 0;
    }

    // return the name property
    getName() {
        return this.name;
    }

    // say hello to another wombat
    // uses the getName method of the wombat
    sayHelloTo(wombat) {
        return "Hello " + wombat.getName();
    }

    // add one hug
    giveHug() {
        this.hugs += 1;
        return this;
    }

    // get the hug property
    howManyHugs() {
        return this.hugs;
    }
}

/*
 * Test code
 */
let tish = new Wombat("Tish");
let fonny = new Wombat("Fonny");

let tishName = tish.getName();
console.log("Expected: Tish, Actual: " + tishName);

let greeting = tish.sayHelloTo(fonny);
console.log("Expected: Hello Fonny, Actual: " + greeting);

tish.giveHug();
console.log("Expected: 1, Actual: " + tish.howManyHugs());

fonny.giveHug().giveHug().giveHug();
console.log("Expected: 3, Actual: " + fonny.howManyHugs());
