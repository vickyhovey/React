var nameVar = 'Jing';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jing';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Meimei';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Jing Zhao';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);