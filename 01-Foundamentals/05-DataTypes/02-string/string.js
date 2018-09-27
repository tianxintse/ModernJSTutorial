"use strict";

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;

alert(str);
alert(str2);
alert(phrase);

let name = "John";
// embed a variable
alert(`Hello, ${name}!`);
// embed an expression
alert(`the result is ${1 + 2}`);
// the result is ${1 + 2} (double quotes do nothing)
alert( "the result is ${1 + 2}" );