
// Car
// make
// model
// vin
// getDescription
// Setup constructor to take name and age (default to 0)
// getDescription - Jing is * year(s) old.

class Person {
     constructor(name = 'Anonymous', age = 0) {
         //this.name = name || 'test';
         this.name = name;
         this.age = age;

     }
     getGreeting() {
         // return 'Hi. I am ' inject 
         return `Hi. I am ${this.name}`;
     }
    getDescription() {
         // return 'Hi. I am ' inject 
         return `Jing is ${this.age} years old`;
     }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // accessing Person class
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription(); 
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Jing. I am visiting from NYC.
// 2. Hi. I am Jing.

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
   

    }
}

 
const me = new Traveler('Jing', 26, 'NYC');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());