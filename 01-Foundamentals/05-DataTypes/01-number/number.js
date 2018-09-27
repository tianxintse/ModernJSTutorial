"use strict";

// normal numbers
let n = 123;
n = 12.345;

// Infinity and -Infinity
alert(1/0); // Infinity
alert(Infinity); // Infinity

// NaN represents a computational error. It is a result of
// an incorrect or an undefined mathematical operation, for instance
alert( "not a number" / 2 ); // NaN, such division is erroneous

// NaN is sticky. Any further operation on NaN would give NaN:
alert( "not a number" / 2 + 5 ); // NaN