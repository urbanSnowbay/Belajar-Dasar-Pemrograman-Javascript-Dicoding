// Assignment Operator
let x = 10;
let y = 5;
x += y; // x = x + y
console.log(x) // 15
// Assignment Operator

// Comparison Operator
let a = 10;
let b = 5;
console.log(a < b) // false
console.log(a > b) // true

const aString = "10";
const aNumber = 10;
console.log(aString == aNumber) // true (membandingkan hanya dari kesamaan nilainya)
console.log(aString === aNumber) // false (membandingkan dengan memperhatikan tipe datanya)
// Comparison Operator

// Logical Operator
let c = 10;
let d = 5;
console.log(`1. ${c < 15 && d > 1}`) // true && true = true
console.log(`2. ${c > 15 && d > 1}`) // false && true = false

console.log(`3. ${c < 15 || d > 1}`) // true && true = true
console.log(`4. ${c > 15 || d > 1}`) // false && true = true

console.log(`5. ${!(c < 15)}`) // !true = false
console.log(`6. ${!(c < 15 && d > 1)}`) // !true = false
console.log(`7. ${!(c > 15 && d > 1)}`) // !(false && true) -> !false = true

