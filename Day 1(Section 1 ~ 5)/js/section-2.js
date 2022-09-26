//Array Destructuring
function getScores() {
  return [70, 80, 90];
}

let [x, y, z] = getScores();

console.log(x);
console.log(y);
console.log(z);

//Object Destructuring 
let person = {
    firstName: 'John',
    lastName: 'Doe',
};

let { firstName, lastName} = person;
console.log(firstName);
console.log(lastName);
