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

/*let x;

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
console.log(x);*/

// NUMBER CHALLENGE //

/*x = 50
y = 15

const sumOutput = x + y;
console.log(sumOutput);

const differenceOutput = x - y;
console.log(differenceOutput);

const productOutput = x * y;
console.log(productOutput);

const quotientOutput = x / y;
console.log(quotientOutput);

const rmOutput = x % y;
console.log(rmOutput);*/

// DATE AND TIME //

/*let d;

// Get today's date and time
d = new Date();
console.log(d);

// Set to a string
d = d.toString();
console.log(d);
// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);
console.log(d);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');
console.log(d);
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();
console.log(d);

// Get the timestamp of a specific date
d = new Date();
console.log(d);

d = d.getTime();
console.log(d);

d = d.valueOf();
console.log(d);

// Create a date from a timestamp
d = new Date(1666962049745);
console.log(d);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);
console.log(d);*/

// DATE OBEJECT METHODS //
/*let x;
let d = new Date();


x = d.toString();
console.log(x);

x = d.getTime();
console.log(x);

x = d.valueOf();
console.log(x);

x = d.getFullYear();
console.log(x);

x = d.getMonth();
console.log(x);

x = d.getMonth() + 1;
console.log(x);

x = d.getDate();
console.log(x);

x = d.getDay();
console.log(x);

x = d.getHours();
console.log(x);

x = d.getMinutes();
console.log(x);

x = d.getSeconds();
console.log(x);

x = d.getMilliseconds();
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);

x = Intl.DateTimeFormat('en-GB').format(d);
console.log(x);

x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x);

x = d.toLocaleString('default', { month: 'short' });
console.log(x);

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);*/

// ARRAY BASICS //
/*let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
console.log(numbers);

const mixed = [12, 'Hello', true, null];
console.log(mixed);

// Array Constructor
const fruits = new Array('apple', 'banana', 'orange');
console.log(fruits);

// Get value by index
x = numbers[0];
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = `My favorite fruit is ${fruits[1]}`;
console.log(x);

x = numbers.length;
console.log(x);

fruits[2] = 'pear';

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);*/

// ARRAY METHODS //
/*let x;

const arr = [28, 38, 44, 29, 109];
console.log(arr);

// push() - Push a value on to the end of the array
arr.push(100);
console.log(arr);

// pop() - Take the last value off
arr.pop();
console.log(arr);

// unshift() - Add a value to the beginning of the array
arr.unshift(99);
console.log(arr);

// shift() - Remove first value
arr.shift();
console.log(arr);

// reverse() - Reverse an array
arr.reverse();
console.log(arr);

// includes() - Check to see if something is in the array - true/false based
x = arr.includes(445);
console.log(x, arr);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);
console.log(x, arr);

// Return array as a string
x = arr.toString();
console.log(x, arr);

x = arr.join();
console.log(x, arr);

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);
console.log(x, arr);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);
console.log(x, arr);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);
console.log(x, arr);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x, arr);*/

// ARRAY NESTING, CONCAT AND SPREADING //

/*let x;

const fruits = ['apple', 'pear', 'orange'];
console.log(fruits);

const berries = ['strawberry', 'blueberry', 'rasberry'];
console.log(berries);

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);
console.log(fruits);

// Now we can access 'blueberry' with the following
x = fruits[3][1];
console.log(x);

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];
console.log(allFruits);

x = allFruits[1][2];
console.log(x);

// concat() - Concatenate arrays
x = fruits.concat(berries);
console.log(x);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];
console.log(x);

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
console.log(arr);

x = arr.flat();
console.log(x, arr);

// Static methods of Array object

// isArray() - Check is it an array
x = Array.isArray(fruits);
console.log(x);

// from() - Create an array from an array like value
x = Array.from('12345');
console.log(x);

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x);*/

// ARRAY CHALLENGE //
 // challenge 1
const arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr);

arr.push(0);
console.log(arr);

arr.unshift(6);
console.log(arr);

// challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

// OBJECT LITERALS //

/*let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};
console.log(person);

// Accessing object properties
x = person.name; // Dot notation
console.log(x);

x = person['age']; // Bracket notation
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies[0];
console.log(x);

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);*/

// OBJECT SPREAD METHODS // 

/*let x;

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

console.log(x);

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos;
console.log(x);

x = todos[0].name;
console.log(x);

// Get array of object keys
x = Object.keys(todo);
console.log(x);

// Get length of an object
x = Object.keys(todo).length;
console.log(x);

// Get array of object values
x = Object.values(todo);
console.log(x);

// Get array of object key/value pairs
x = Object.entries(todo);
console.log(x);

// Check if object has a property
x = todo.hasOwnProperty('age');
console.log(x);*/

// DESTRUCTURING NAMING //

const firstName = 'Safiat';
const lastName = 'Junaid';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};
console.log(person.age);

// Destructuring object properties

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
      name: 'John',
    },
  };
  
  const {
    id: todoId, // rename id to todoId
    title,
    user: { name }, // destructuring multiple levels
  } = todo;
  
  console.log(todoId);
  
  // Destructuring arrays & using the rest/spread operator
  const numbers = [23, 67, 33, 49, 52];
  
  const [first, second, ...rest] = numbers;
  
  console.log(first, second, rest);

  // OBJECT cHALLENGE //
  const library = [
    {
      title: 'Peer e Kamil',
      author: 'Umera Ahmed',
      status: {
        own: true,
        reading: false,
        read: false,    
      }
    },
    {
      title: 'Jannat k Pattay',
      author: 'Nimrah Ahmed',
      status: {
        own: true,
        reading: false,
        read: false,    
      }
    },
    {
      title: 'Mushaf',
      author: 'Nimrah Ahmed',
      status: {
        own: true,
        reading: false,
        read: false,    
      }
    },
  ]
  console.log(library);






