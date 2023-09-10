'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive..');

function logger() {
    console.log('My name is Safiat');
}

// calling / running / invoking function

logger();
logger();
logger();

// function declaration
function fruitProcessor(apples, betroots) {
    console.log(apples, betroots);
    const juice = `Juice with ${apples} apples and ${betroots} betroots.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(fruitProcessor(5, 2));
console.log(appleJuice);

const appleBetrootJuice = fruitProcessor(4, 1);
console.log(appleBetrootJuice);

function calcAge1(birthYear) {
    console.log(birthYear);
    return 2037 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age1, age2);

