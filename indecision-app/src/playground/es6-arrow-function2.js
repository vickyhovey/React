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
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
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
