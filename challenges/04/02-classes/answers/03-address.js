// Create a class that represents an address - use different properties for each part of the address. It should have a `fullAddress` method, which will return the full address as a nicely formatted string.

class Address {
    // take the street, town, and postcode values on creation
    constructor(street, town, postcode) {
        this.street = street;
        this.town = town;
        this.postcode = postcode;
    }

    // the same fullAddress function as on the object literal version
    fullAddress() {
        let props = [
            this.street,
            this.town,
            this.postcode,
        ];

        return props.join(", ");
    }
};


let address = new Address(
    "1 Made Up Street",
    "Bristol",
    "BS4 8TR"
);

let address2 = new Address(
    "2 Made Up Street",
    "Bristol",
    "BS5 8TR"
);

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
console.log(address2.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
