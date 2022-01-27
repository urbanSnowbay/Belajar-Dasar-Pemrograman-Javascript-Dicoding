// Destructuring Array
const listArray = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"];
const [pertama, kedua, ketiga, keempat, kelima, keenam, ketujuh] = listArray;
console.log(pertama);
console.log(kedua);
console.log(ketiga);
console.log(keempat);
console.log(kelima);
console.log(keenam);
console.log(ketujuh);

// mengambil nilai array dari urutan index tertentu
const arrayList = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"];
const [, , , , kelima] = arrayList;
console.log(kelima);
//

// Destructuring Assignment
const favorites = ["Pecel lele", "Pecel ayam", "Pecel bebek", "Pecel kambing"];

[foodPertama, foodKedua] = favorites;

console.log(foodPertama);
console.log(foodKedua);
// 1

// 2
let a = 1;
let b = 2;

console.log("Sebelum di-swap");
console.log("Nilai a = " + a);
console.log("Nilai b = " + b);

[a,b] = [b,a]
console.log("Sesudah di-swap");
console.log("Nilai a = " + a);
console.log("Nilai b = " + b);
// 2

// Default Values
const acak = ["Seafood"];
const [arrayPertama, arrayKedua = "junkfood"] = acak;
console.log(arrayPertama);
console.log(arrayKedua);
