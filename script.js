console.log("Hello world from separate script file");
console.log("Hello all")

// Variables

a = 5 // global variable
console.log(a)

var b = 6 // function scope variable // available in the entire function
console.log(b)

let c = 7 // block scope variable // available inside the block
console.log(c)

const d = 8 // constant variable // value cannot be changed
// d = 10 // we cannot do this
console.log(d)


// Input and Output
// let value = prompt("What is your name?")
// console.log(value)

console.log("This is how output works in JS")


// Data Types

// Boolean - true and false
true
false

// Falsy values
false
0
""
NaN
null // None in python
undefined

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(undefined))

// Truthy values
// all other values are true
console.log(Boolean(12))
console.log(Boolean("hello"))
console.log(Boolean([]))


// String
"Hello world"

let greet = "Hi!!!"
let personName = "John"

console.log(greet.length)
// substring
// splice
// slice
console.log(personName.substring(0, 3))

// string concatenation
console.log("Hey " + greet + " " + personName + " Welcome")
console.log(greet.concat(personName))
// string interpolation
console.log(`Hey ${greet} ${personName} Welcome`)


// Number
console.log(typeof(2))
console.log(typeof(2.1))

console.log(1/2)
console.log(1/"2") // implicit conversion // intrinsic conversion
console.log(1/0)
console.log(1/"hello")


// Sidenote
// Implicit conversion
console.log(1 + "2")
console.log(1 - "2")

// Explicit conversion
console.log(Number("2"))


// null and undefined
let a2
console.log(a2)
console.log(typeof(a2))

let b2 = null
console.log(b2)
console.log(typeof(b2))


// Arrays and Objects