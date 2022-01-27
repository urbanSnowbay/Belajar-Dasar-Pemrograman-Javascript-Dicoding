function perkalian(angka) {
    hasil = angka + angka; /* Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script 
                           ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
                           (kecuali let hasil = angka + angka;, baru deh outputnya 50)*/
    return hasil;
}
let hasil = 50;
let number = perkalian(5);
console.log(hasil);
