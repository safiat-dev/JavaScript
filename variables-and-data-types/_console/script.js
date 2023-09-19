/* CONSOLE */
/*console.log(100); // number

console.log('HI'); // string

console.log(100, 'HI', false); // number, string, boolean

const x = 100; // variable and value
console.log(x); // calculate the value of x

console.error('Alert');
console.warn('Warning');

console.table({name: 'Safiat', email: 'safiat@gmail.com'});

console.group('Simple');
console.error('Alert');
console.warn('Warning');
console.log(x);
console.groupEnd();

const styles = 'padding: 10px; background-color:black; color: green;' // css styling
console.log('%cHello Developers', styles); */

/* VARIABLES AND CONSTANTS */

// Ways to declare a variable
// `var`, `let`, & `const`

/*let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);*/

/* DATA TYPES */

/*// String
const firstName = 'Sara';
console.log(firstName, typeof firstName);
// Number
const age = 30;
const temp = 98.9;
console.log(age, typeof age);
console.log(temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined
// let score;
const score = undefined;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 9007199254740991n;
console.log(n, typeof n);

// Reference Types

const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
  name: 'Safiat',
};
console.log(person, typeof person);

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3 */

/* PRIMITIVE AND REFERENCE TYPE */

// Primitive values are stored on the stack
const name = 'Safiat';
const age = 30;

// Reference values are stored on the heap
const person = {
    name:'Junaid',
    age: '30',

};

let newName = name;
newName = 'Qasim';

let newPerson = person;
newPerson.name = 'Safiat';

console.log(name, newName);
console.log(person, newPerson);

/* TYPE CONVERSION */

let amount = 'hello';

// covert string to number
// amount = parseInt(amount); 
// amount = +amount;
// amount = Number(amount);

// convert number to string
// amount = amount.toString();
// amount = String(amount);

// convert string to decimal
 //amount = parseFloat(amount);

// convert number to boolean
//amount = Boolean(amount);

// NaN
amount = parseInt(amount);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);

/* OPERATORS */

//  1 - ARITHEMATIC OPERATORS

let x;

x = 5 + 5;
x = 5-5;
x = 5*5;
x = 5/5;

console.log(x);

// CONCATENATION OPERATOR // it is the plus sign : one is addition and other one is add strings together

x = 'Hello ' + ' World';

console.log(x);

// EXPONENT OPERATOR // DOUBLE ASTERICK **

x = 4 ** 3;

console.log(x);

// INCREMENT OPERATOR

x = 2;
x = x + 1;
x++;

console.log(x);

// DECREMENT OPERATORS

x = x - 1;
x--;

console.log(x);

// 2 - ASSIGNMENT OPERATORS

x = 10;

x += 5;
x -= 5;

console.log(x);

// 3 - COMPARISON OPERATORS // true false

x = 2 == '2'; // only evaluates the value
x = 2 === '2' // evaluates the typeof and value both
x = 2 != '2' // not equal
x = 2 !== '2' // evaluates the both typeof and value
x = 10 > 5;

console.log(x);

/* TYPE COERSION */

x = 5 + '5';
x = 5 + Number('5');
x = 5 * '5';
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;
x = 5 + false;
x = 5 + undefined;

console.log(x, typeof x);






