let x = 1;
console.log(typeof(x)) // number

// Numbers
let a = 50;
let b = 70;
console.log(a + b) // 120
console.log(a - b) // -20
console.log(a / b) // 0.7142857142857143
console.log(a * b) // 3500
console.log(a % b) // 50


let postFix = 10;
console.log(postFix++); // 10
console.log(postFix); // 11

let preFix = 20;
console.log(++preFix); // 21
// Numbers

// BigInt
const angkaBesar = 1234567890123456789012345678901234567890n;
console.log(angkaBesar);
const angkaInt = 1234567890123456789012345678901234567890;
console.log(angkaInt)

console.log(5n / 2n); // 2n, buka 2.5
// BigInt

// Strings
let y = "Haiqal";
console.log(typeof(y)) // string

let oi = '"I think it\'s awesome!" he answered confidently';
console.log(oi) // "I think it's awesome!" he answered confidently

let z = "Windows path: C:\\Program Files\\MyProject";
console.log(z) // Windows path: C:\Program Files\MyProject

let greet = "Hellow";
let moreGreet = greet + greet;
console.log(moreGreet) // HellowHellow

let namaSaya = "Haiqal";
console.log(`Halloo, nama saya ${namaSaya}`) // Halloo, nama saya Haiqal
// Strings

// Boolean
let p = true;
let s = false;
console.log(typeof(p)) // boolean
console.log(typeof(s)) // boolean

const numberPertama = 13;
const numberKedua = 17;
let lebihDari = numberPertama > numberKedua;
let kurangDari = numberPertama < numberKedua;
console.log(lebihDari) // false
console.log(kurangDari) // true
// Boolean

// Null
let dataSementaraAjaLah = null;
console.log(dataSementaraAjaLah) // null
// Null

// Symbol
const id = Symbol("id");
console.log(id)

const id1 = Symbol(1);
const id2 = Symbol(1);
console.log(id1 == id2) // false
// Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data. 

