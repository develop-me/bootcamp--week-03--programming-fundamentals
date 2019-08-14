let mark = {
    name: "Mark",
    birthdate: new Date("1984-04-16"),

    getAge() {
        const millisecondsPerYear = 31556952000;
        let now = new Date();

        // this.birthdate is the birthdate property above
        let years = (now - this.birthdate) / millisecondsPerYear;

        return Math.floor(years);
    },
};

mark.getAge(); // 35
