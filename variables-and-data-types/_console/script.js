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

/*// Primitive values are stored on the stack
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
console.log(person, newPerson); */

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

/*//  1 - ARITHEMATIC OPERATORS

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

console.log(x); */

/* TYPE COERSION */

/*x = 5 + '5';
x = 5 + Number('5');
x = 5 * '5';
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;
x = 5 + false;
x = 5 + undefined;

console.log(x, typeof x); */

/* STRINGS */

/*let x;

const name = 'Safiat';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';

console.log(x);

// TEMPLATE LITERALS 

x = `Hello my name is ${name} and I am ${age} years old`;

console.log(x);

// STRINGS PROPERTIES(attributes) AND METHODS(functions)
const s = new String('Hello World');

x = typeof s;
x = s.length;

console.log(s);

// ACCESS VALUE BY KEY

x = s[2];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
// charAt() - returns the character at the specified index
x = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');

// substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'John');

// includes() - returns true if the string is found
x = s.includes('Hell');

// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of strings
x = s.split('');
console.log(x);*/


// CHALLENGE //

/*const myString = 'developer';

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

/* NUMBERS */

/*let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
console.log(x);
// To get the length
x = num.toString().length;
console.log(x);

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);
console.log(x);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);
console.log(x);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);
console.log(x);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');
console.log(x);

// valueOf - Get value
x = num.valueOf();
console.log(x);
// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x); */

/* MATH OBJECT */

let x;

// Square root
x = Math.sqrt(9);
console.log(x);

// Absolute value
x = Math.abs(-5);
console.log(x);

// Round
x = Math.round(4.2);
console.log(x);

// Round up
x = Math.ceil(4.2);
console.log(x);

// Round down
x = Math.floor(4.9);
console.log(x);

// Exponent
x = Math.pow(2, 3);
console.log(x);
// Minimum number
x = Math.min(4, 5, 3);
console.log(x);

// Maximum number
x = Math.max(4, 5, 3);
console.log(x);

// Get a random number/decimal between 0 and 1
x = Math.random();
console.log(x);

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);
console.log(x);






