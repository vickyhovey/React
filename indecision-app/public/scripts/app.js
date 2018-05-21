'use strict';

// argument object - no long bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));
// this keyword - no longer bound

var user = {
    name: 'Jing',
    cities: ['NYC', 'DC', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
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

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single
    // multiply - return a new array where the number have been multiplied
    numbers: [10, 20, 30],
    multiplyBy: 3,
    mutiply: function mutiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.mutiply());
