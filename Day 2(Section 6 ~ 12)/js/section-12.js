//startsWith
const title1 = 'Jack and Jill Went Up the Hill';

console.log(title1.startsWith('Jack'));
console.log(title1.startsWith('jack'));
console.log(title1.startsWith('Jill', 9));

//endsWith
const title2 = 'Jack and Jill Went Up the Hill';

console.log(title2.endsWith('Hill'));
console.log(title2.endsWith('hill'));
console.log(title2.endsWith('Up', 21));

//includes
let email = 'admin@example.com';
console.log(email.includes('@'));