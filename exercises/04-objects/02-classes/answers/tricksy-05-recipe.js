// Create two classes, one that represents a recipe and one that represents an ingredient

// An ingredient class
class Ingredient {
    // takes the name and dietary requirements values
    constructor(name, dietary) {
        this.name = name;
        this.dietary = dietary;
    }

    // returns the name
    getName() {
        return this.name;
    }

    // returns the dietary requirements
    getDietary() {
        return this.dietary;
    }
}

class Recipe {
    // The recipe doesn't take any values initially
    constructor(name) {
        this.name = name;
        this.method = "";
        this.ingredients = [];
    }

    // need to accept an ingredient object and and amount
    addIngredient(ingredient, amount) {
        // we need some way to associate the ingredient and the amount
        // so we use an object literal to link them together
        this.ingredients.push({
            ingredient: ingredient,
            amount: amount,
        });
    }

    // sets the method property
    addMethod(method) {
        this.method = method;
    }

    display() {
        // first map over ingredients to turn into string
        let ingredients = this.ingredients.map(i => `- ${i.amount} ${i.ingredient.getName()}`);

        // create an array of outputs
        let elements = [
            this.name,
            "Ingredients",
            ingredients.join("\n"),
            "Method",
            this.method,
        ];

        // sepearate each output by two line breaks
        return elements.join("\n\n");
    }

    dietary() {
        // for each ingredient get it's dietary information array
        // then for each of those, combine into a new array
        return this.ingredients.map(i => i.ingredient.getDietary()).reduce((acc, ingredient) => {
            // for each array of requirements add to requirements if not in array already
            return ingredient.reduce((dietary, d) => {
                return dietary.concat(dietary.indexOf(d) === -1 ? [d] : []);
            }, acc);
        }, []).join(", "); // turn into a string
    }
}

// ingredients take a name, followed by an array of dietary notes
let flour = new Ingredient("Flour", ["gluten"]);
let eggs = new Ingredient("Eggs", ["animal produce"]);
let sugar = new Ingredient("Sugar", []);
let butter = new Ingredient("Butter", ["dairy", "animal produce"]);

// a recipe takes a name
let cake = new Recipe("Cake");

// we can add ingredients plus amounts
cake.addIngredient(flour, "200g");
cake.addIngredient(butter, "100g");
cake.addIngredient(sugar, "50g");
cake.addIngredient(eggs, 2);

// we can add a method
cake.addMethod("Put them in a bowl, mix them together, cook for a bit. Job's a good'un");

// we can see the recipe
console.log(cake.display());

/*
    Cake

    Ingredients

    - 200g Flour
    - 100g Butter
    - 50g Sugar
    - 2 Eggs

    Method

    Put them in a bowl, mix them together, cook for a bit. Job's a good'un

*/

// we can list dietary information
console.log(cake.dietary()); // "gluten, animal produce, dairy"
