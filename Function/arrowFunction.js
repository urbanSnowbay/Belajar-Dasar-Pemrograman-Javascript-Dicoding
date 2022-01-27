// regular function
function sayHello(greet) {
    console.log(`${greet}`);
}
sayHello("Haiqal");

const namaSaya = function(nama) {
    console.log(`Halo, nama saya ${nama}`);
}
namaSaya("Haiqal");

// arrow function
const bilangHalo = hai => {
    console.log(`halo ${hai}, apa kabar?`)
}
bilangHalo("Haiqal");

// arrow function tanpa parameter 
const salam = () => {
    console.log(`Ohayou Gozaimasuu`);
}
salam();

// arrow function tanpa kurung kurawal
const tanpaKurungKurawal = () => console.log(`Selamat pagi`);
tanpaKurungKurawal();
const sokAsik = woi => console.log(`Nama kamu siapa, ${woi}?`);
sokAsik("Kak");

// fungsi yg mengembalikan nilai tanpa return
const perkalian = (x, z) => x * z;
console.log(perkalian(3, 3));