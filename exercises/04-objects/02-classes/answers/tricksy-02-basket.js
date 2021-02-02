// Create an class that represents a shopping basket. It should have a property, `items`, that keeps track of the items in the basket. It should have an `add` method to add items to the basket. It should have a `total` method that returns the value of all the items' prices. It should have a `list` method that returns an array of item names.

class Basket {
    // no arguments when created
    constructor() {
        // create an empty list of items
        this.items = [];
    }

    add(item) {
        // add the given item to the array of items
        this.items.push(item);
    }

    total() {
        // map to get the prices of each item
        // then use reduce to add up the prices
        // use toFixed to output nicely
        return "£" + this.items.map(item => item.getPrice()).reduce((a, b) => a + b, 0).toFixed(2);
    }

    list() {
        // map over each item to get its name
        return this.items.map(item => item.getName());
    }
}

class BasketItem {
    // takes the name and price values on creation
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // returns the name
    getName() {
        return this.name;
    }

    // return the price
    getPrice() {
        return this.price;
    }
}

// test code
let basket = new Basket();

let item1 = new BasketItem("coffee", 3.50);
let item2 = new BasketItem("tea", 2.50);

basket.add(item1);
basket.add(item2);

console.log(
    basket.total(), // "6.00"
    basket.list(), // ["coffee", "tea"]
);
