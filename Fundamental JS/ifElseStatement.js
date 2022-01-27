const isRaining = false;
console.log("Persiapan hujan, bawa payung");

if (isRaining) {
    console.log("HUJANN!! cepat keluarkan payungmu!");
} else {
    console.log("Gausah dikeluarin payungnya, mendung doang");
}
// if === true, 
// else === false
let x = 49;
if (x < 50) {
    console.log("nilai ini kurang dari 50")
} else {
    console.log("nilai ini 50")
}

let bahasa = "jawa";
let salam = "";

if (bahasa === "sunda") {
    salam = "kumaha damang"
} else if (bahasa === "jawa") {
    salam = "ojo nesu-nesu"
} else if (bahasa === "minang") {
    salam = "gw gatau bahasa minang anjay"
}
console.log(salam)

// condition ? true expression : false expression
const isMember = false;
const discount = isMember ? 4 : 2;
console.log(`Selamat, anda mendapatkan diskon sebesar ${discount * 100}%`)

// Truthy dan Falsy
// Tipe data yang bernilai false antara lain:   // Number 0
                                                // BigInt 0n
                                                // String kosong seperti “” atau ‘’
                                                // null
                                                // undefined
                                                // NaN, atau Not a Number
let nama = "";
if (nama) {
    console.log("Haiqal")
} else {
    console.log("Nama ini masih kosong")
}

let nilai = 90;
let result = null;

// Kuis Coding : Logika Operator dan If Else
if (nilai >= 90) {
    result = "Selamat! Anda mendapatkan nilai A."
} else if (nilai >= 80) {
    result = "Anda mendapatkan nilai B."
} else if (nilai >= 70) {
    result = "Anda mendapatkan nilai C."
} else if (nilai >= 60) {
    result = "Anda mendapatkan milai D."
} else {
    result = "Anda mendapatkan nilai E."
}
console.log(result);