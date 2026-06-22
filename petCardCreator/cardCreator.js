// Constructor Function
function Pet(name, type, age, owner = null) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;

    // Unique Symbol ID
    this.id = Symbol(name);

    // Returns description
    this.getDescription = function () {
        return `${this.name} is a ${this.type} and is ${this.age} years old.`;
    };

    // Increase age by 1
    this.haveBirthday = function () {
        this.age++;
    };

    // Uses optional chaining
    this.getOwnerName = function () {
        return this.owner?.name || "none";
    };

    // Returns Symbol ID
    this.getID = function () {
        return this.id;
    };
}

// Create Pets
const pet1 = new Pet(
    "Stanley",
    "cat",
    6,
    { name: "Emily" }
);

const pet2 = new Pet(
    "Buddy",
    "dog",
    3
);

const pet3 = new Pet(
    "Sky",
    "falcon",
    5,
    { name: "John" }
);

const pets = [pet1, pet2, pet3];

// Display information
pets.forEach(function (pet) {
    console.log("Name:", pet.name);
    console.log("Type:", pet.type);
    console.log("Age:", pet.age);
    console.log("Owner:", pet.getOwnerName());
    console.log("Description:", pet.getDescription());
    console.log("ID:", pet.getID());
    console.log("------------------------");
});

// Birthday
pet1.haveBirthday();

console.log("After Birthday:");
console.log(pet1.getDescription());

// Current Date
console.log("Current Date and Time:");
console.log(new Date());

/*

Reflection

1. What does this refer to in your constructor and methods?

In the constructor and methods, this refers to the current Pet object that is being created or used.

2. What does optional chaining do in your code?

Optional chaining safely checks if the owner object exists before trying to access owner.name. If there is no owner, it returns undefined instead of causing an error.

3. Why might the Date object be useful in a JS program?

The Date object allows programs to work with dates and times. It can be used for timestamps, calendars, scheduling, and displaying the current date and time.

*/