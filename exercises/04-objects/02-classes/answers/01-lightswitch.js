// Create an class that represents a light switch

class Lightswitch {
    // doesn't take any arguments when we create it
    constructor() {
        // set up the on property to track whether the lightswitch is on
        this.on = false;
    }

    turnOn() {
        // set the on property to true
        this.on = true;
    }

    turnOff() {
        // set the on property to false
        this.on = false;
    }

    isOn() {
        // return the value of the on property
        return this.on;
    }
}

let lightswitch = new Lightswitch();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // false

// you can turn it on
lightswitch.turnOn();

console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();

console.log(lightswitch.isOn()); // false
