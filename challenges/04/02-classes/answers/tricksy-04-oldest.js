// Create a function `oldest` that returns the name of the oldest person. Remember, the name is a **key**, not a property.

let oldest = map => {
    // get the keys of the map
    let keys = Object.keys(map);

    // reduce over the keys
    // pass in the first key as the initial value
    return keys.reduce((oldestKey, currentKey) => {
        // compare the values for each key
        // if the value is bigger pass along that as the key next time
        return map[currentKey] > map[oldestKey] ? currentKey : oldestKey;
    }, keys[0]);
};

(() => {
    // a map object
    // name as the key
    // ages as the value
    let folks = {
        "Alice": 29,
        "Bob": 45,
        "Carol": 67,
        "Dan": 32,
    };

    console.log(oldest(folks)); // "Carol"
})()
