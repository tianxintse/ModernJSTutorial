"use strict";

//When compared values belong to different types, they are converted to numbers.
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true

//A funny consequence
let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

// strict equality operator
alert(0 === false); // false