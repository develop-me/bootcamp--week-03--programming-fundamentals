class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.price = null;
    }

    setPrice(value) {
        this.price = value;
        return this;
    }

    getPrice() {
        if (this.price === null) {
            return "Unknown";
        }

        return "£" + this.price.toFixed(2);
    }
}

let book = new Book("Lord of the Rrrings", "JRRRRR Tolkien");
console.log(book.getPrice()); // "Unknown"

book.setPrice(9.9);
console.log(book.getPrice()); // "£9.90"
