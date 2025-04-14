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

var d2 = [1,
    2];
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
if (d2 == foo) {
    // do something
}
