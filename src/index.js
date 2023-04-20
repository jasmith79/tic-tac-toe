// These things are called comments, start with //, and
// are inert: they don't affect what runs.

// Data types
const immaString = ''; // could be "" as well
const immaTemplateString = `
   I preserve whitespace! I can have variables ${immaString}
`;

const immaNumber = 3; // could also be something like 1.2, 10e3
const immaBoolean = true; // booleans are true/false
const anArray = [1, 2];
console.log(anArray[0]); // prints 1

const alsoArray = ['hi', 5]; // can contain different kinds of values

const anObject = { a: 1 }; // I map *keys* to *values*
console.log(anObject.a, anObject['a']); // both print out 1

function immaFunction(x) {
    return x * 2;
}

console.log(immaFunction(2)); // prints out 4

// Control flow

let foo = true;
if (foo) {
    console.log('true branch');
} else {
    console.log('false branch');
}

let n = 3;
// will print 3 then 2 then 1, skips and moves on once condition is false
while (n) {
    console.log(n);
    n = n - 1;
}

for (let item of ['a', 'b', 'c']) {
    console.log(item); // logs all items in the array
}

