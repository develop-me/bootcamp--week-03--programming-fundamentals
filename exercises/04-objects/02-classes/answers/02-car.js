// Create a class that represents a car

class Car {
    // takes the make and numberplate values when created
    constructor(make, np) {
        // store the make property
        this.make = make;
        // store the numberplare property
        this.np = np;
        // create the milage property and set to 0
        this.mileage = 0;
    }

    // return the numberplate property
    getNumberplate() {
        return this.np;
    }

    // return the make property
    getMake() {
        return this.make;
    }

    // return the mileage property
    getMileage() {
        return this.mileage;
    }

    // take a number and add it to the current value of the mileage property
    addJourney(miles) {
        this.mileage += miles;
    }
}

// you pass in a make and number plate
let car = new Car("Ford", "XY11 4TY");

// you can get various bits of information about it
console.log(car.getNumberplate()); // "XY11 4TY"
console.log(car.getMake()); // "Ford"
console.log(car.getMileage()); // 0

// you can add journey
car.addJourney(100);
console.log(car.getMileage()); // 100

car.addJourney(200);
console.log(car.getMileage()); // 300
