// Create an object literal that represents an address - use different properties for each part of the address. It should have a `fullAddress` method, which will return the full address as a nicely formatted string.
//
let address = {
    // the street property
    street: "1 Made Up Street",
    // the town property
    town: "Bristol",
    // the postcode property
    postcode: "BS4 8TR",

    // the fullAddress method
    // doesn't take any arguments - all the information is part of the address object
    fullAddress() {
        // put all the properties we're interested in into an array
        let props = [
            this.street, // use this to get properties of the current object
            this.town,
            this.postcode,
        ];

        // join together the array of properties with a comma
        return props.join(", ");
    }
};

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// check it works if the variable gets renamed
let renamed = address;
address = 10;
console.log(renamed.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
