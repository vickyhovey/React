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

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
        //const that =this;
        // console.log(this.name);
        // console.log(this.cities);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());
