// Create a function, `total`, that takes an **array** of shopping item **objects** and adds their price together.

// a basic add function
let add = (a, b) => a + b;

let total = items => {
    // items is an array, so we need to do array operations to get to the objects
    // first extract the price property of each item
    // then use reduce to add them up
    // finally, use toFixed(2) to get accurate price to two decimal places
    return items.map(item => item.price).reduce(add, 0).toFixed(2);
};

(() => {
    let shoppingList = [{
        name: "coffee",
        price: 3.50,
    }, {
        name: "tea",
        price: 2.50,
    }, {
        name: "toblerone",
        price: 3.20,
    }, {
        name: "newspaper",
        price: 0.10,
    }];

    console.log(
        total(shoppingList), // 9.30
    );
})();
