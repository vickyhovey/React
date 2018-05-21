// argument object - no long bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));
// this keyword - no longer bound

const user = {
    name: 'Jing',
    cities: ['NYC', 'DC', 'Dublin'],
    printPlacesLived() {
        return  this.cities.map((city) => this.name + ' has lived in ' + city);
        }
        
        //const that =this;
        // console.log(this.name);
        // console.log(this.cities);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    };

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single
    // multiply - return a new array where the number have been multiplied
    numbers: [10, 20, 30],
    multiplyBy: 3,
    mutiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.mutiply());
