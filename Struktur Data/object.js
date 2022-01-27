const user = {
    firstName: "Haiqal",
    lastName: "Utama",
    umur: 20,
    "Warna Rambut": "Hitam",
    isHuman: true,
};

console.log(`Hallo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.umur} tahun`);
console.log(`Apakah Haiqal seorang manusia?: ${user.isHuman}`);
console.log(`Saya memiliki warna rambut ${user["Warna Rambut"]}`);

//

const kendaraan = {
    namaMobil: "Honda",
    jenisMobil: "Sedan",
    jarakTempuh: 15000,
    "Kecepatan Rata Rata": "70 km/jam",
}
kendaraan.jenisMobil = "Truck";
kendaraan["Kecepatan Rata Rata"] = "50 km/jam";
kendaraan.apakahMenyenangkan = "Tidak";
delete kendaraan.jenisMobil;
console.log(kendaraan);

// Kuis Coding : Object
const restaurant = {
    name: "Haiqal",
    city: "Jakarta",
    "favorite drink": "Coca-Cola",
    "favorite food": "Pecel Lele",
    isVegan: true
}
const name = "Haiqal";
const favoriteDrink = "Coca-Cola";

console.log(restaurant);