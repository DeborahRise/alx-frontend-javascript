# 0x00. ES6 Basics

## Learning Objectives
### At the end of this project, I am able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

### In Summary:
What ES6 Is
ES6, or ECMAScript 2015, is a significant update to JavaScript that introduced a wide array of new features and improvements to the language. It is the sixth edition of the ECMAScript standard, which is the specification that JavaScript is based on.

New Features Introduced in ES6
Some of the key features introduced in ES6 include:

Block-scoped variables with let and const
Arrow functions
Default function parameters
Rest and spread operators
Template literals
Enhanced object literals
Iterators and for-of loops
Classes
Promises

The Difference Between a Constant and a Variable
Constant (const): A constant is a variable whose value cannot be changed once it is assigned.
Variable (let or var): A variable declared with let or var can have its value reassigned.
javascript

const PI = 3.14;
PI = 3.15; // This will throw an error

let radius = 5;
radius = 7; // This is allowed
Block-Scoped Variables
let and const are block-scoped, meaning they only exist within the nearest enclosing block, such as a function, loop, or conditional statement.
javascript


if (true) {
  let blockScopedVariable = "I exist only in this block";
  console.log(blockScopedVariable); // This will print the value
}
console.log(blockScopedVariable); // This will throw an error because the variable is not accessible outside the block
Arrow Functions and Function Parameters Default to Them
Arrow functions provide a shorter syntax for writing functions and lexically bind the this value.
javascript


const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!
Rest and Spread Function Parameters
Rest parameters allow functions to accept an indefinite number of arguments as an array.
Spread operator allows an iterable (like an array) to be expanded into individual elements.
javascript


// Rest parameters
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
String Templating in ES6
Template literals allow for easier string interpolation and multi-line strings.
javascript


const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.
Object Creation and Their Properties in ES6
Enhanced object literals make it easier to define objects and their properties.
javascript


const name = "Alice";
const age = 25;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.name); // Output: Alice
person.greet(); // Output: Hello, my name is Alice
Iterators and for-of Loops
Iterators provide a way to access elements of a collection one at a time.
for-of loop iterates over iterable objects like arrays, strings, maps, etc.
javascript


const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value); // Output: 10, 20, 30
}

const str = "hello";
for (const char of str) {
  console.log(char); // Output: h, e, l, l, o
}
These features make ES6 a powerful and versatile version of JavaScript, greatly improving the efficiency and readability of the code.