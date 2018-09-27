"use strict";

// Values that are intuitively “empty”, like 0, an empty string, null, undefined and NaN become false.
// Other values become true.

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false