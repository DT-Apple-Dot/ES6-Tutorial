//let
let x = 10;
if (x == 10) {
let x = 20;
console.log(x); // 20:  reference x inside the block
}
console.log(x);

//var
var v = 'inside';

for (var i = 0; i <= 5; i++) {
  console.log(v,i);
}

//const
const a = 'const';

if (true) {
  const a = "new const";
  console.log(a);
}
console.log(a);  

//Default function parameters
function add(a = 1, b = 2) {
  return a + b;
}
console.log(add());

//Rest parameter
function multi(...num) {
  let total = 1;

  for (n of num) {
    total *= n;
  }
  console.log(total);
}
multi(2, 3);

//Spread operator
let info = { name: 'DT Apple Dot', age: 22 };
let full_info = { ...info, address: 'Yangon', Phone: 09768595768 };
console.log(full_info);

//object literal
let person = (name) => {
  let gender = 'Mr.';
  return {
    [gender] : name
  }
}
console.log(person('DT Apple Dot'))

//for...of
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}

//Octal and binary literals
let b = 0o51;
console.log(b);

let f = 0b111;
console.log(f);