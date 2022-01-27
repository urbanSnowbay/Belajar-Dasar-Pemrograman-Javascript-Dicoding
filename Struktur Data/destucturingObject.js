// Destructuring Object
const profilSaya = {
    nama: "Haiqal",
    kelahiran: "Jakarta",
    umur: 20
}
const { nama, kelahiran, umur } = profilSaya;
console.log(nama, kelahiran, umur);

// Destructuring Assignment
const profile = {
    name: "Haiqal",
    age: 20,
    born: "Jakarta"
}

let name = "";
let born = "";

({ name, born } = profile);

console.log(name);
console.log(born);

// Default Values
const profil = {
    zName: "Haiqal",
    zUmur: 20,
    zAgama: "Islam",
}
const { zName, zUmur, zIsMale = true } = profil;
console.log(zName);
console.log(zUmur);
console.log(zIsMale); 

// Assigning to Different Local Variable Names
const hadeh = {
    tinggi: 150,
    warnaRambut: "Hitam",
    warnaKulit: "Sawo Mateng"
}
const { tinggi: height, warnaRambut: hairColor, warnaKulit: skinColor } = hadeh;
console.log(height);
console.log(hairColor);
console.log(skinColor);
