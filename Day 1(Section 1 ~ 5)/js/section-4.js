//class
class person {
  constructor() {
    console.log('I am constructor');
  }
}
let p = new person();


// getters and setters
class Persons {
  constructor(name) {
      this.setName(name);
  }
  getName() {
      return this.name;
  }
  setName(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this.name = newName;
  }
}

let persons = new Persons('Jane Doe');
console.log(persons);

persons.setName('Jane Smith');
console.log(persons.getName());

//class expressions
function factory(aClass) {
  return new aClass();
}

let greeting = factory(class {
  sayHi() { console.log('Hi'); }
});

greeting.sayHi();

let app = new class {
  constructor(name) {
      this.name = name;
  }
  start() {
      console.log(`Starting the ${this.name}...`);
  }
}('Awesome App');

app.start();

//Static methods
class Person {
  static showName() {
    console.log('I am static')
  }
}
Person.showName();

//Static properties
class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);
let pencle = new Item('Pencle', 5);

console.log(Item.getCount());

//Computed Property
let fullname = 'fullName';

class info {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [fullname]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let Info= new info('John', 'Doe');
console.log(Info.fullName);

//extends and super
class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log('walking on ' + this.legs + ' legs');
  }
}

class Bird extends Animal {
  constructor(legs) {
      super(legs);
  }
  fly() {
      console.log('flying');
  }
}


let bird = new Bird(2);

bird.walk();
bird.fly();


class Person1 {
  constructor(namae) {
      this.namae = namae;
      console.log(new.target.name);
  }
}

class Employee extends Person1 {
  constructor(namae, title) {
      super(namae);
      this.title = title;
  }
}

let john = new Person1('John Doe');
let lily = new Employee('Lily Bush', 'Programmer');