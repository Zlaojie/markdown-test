/*eslint array-bracket-newline: ["error", "always"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2];
var e = [function foo() {
    dosomething();
}];

var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };

typeof foo === "strnig"


if (!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

/* eslint-disable no-alert, no-console */

function badFunction() {
  alert('This is an alert!'); 
  console.log('Logging to the console.'); 
  let x = 10;
  if (x = 20) {
    console.log('x is now 20');
  }
  for (let i = 0; i < 10; i--) { 
    console.log(i);
  }
  function nested() {
    console.log('This is a nested function.');
  }
  nested();
}

badFunction();
