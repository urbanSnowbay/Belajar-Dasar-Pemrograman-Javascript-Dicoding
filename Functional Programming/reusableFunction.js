// *array.map()* akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya.
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}` });
console.log(newArray); // output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]

// *array.filter()* untuk melakukan penyaringan terhadap nilai array yg ada
// contoh penggunaan array.filter() untuk melakukan penyaringan apakah di array tersebut ada nilai yg 'falsy' atau tidak
const truthyFalsy = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyFalsy); // output: [ 1, 'Hallo', 'Harry', 14 ]

// contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
const students = [
    {
        name: 'Harry',
        score: 60,
    }, 
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const syaratPenerimaBeasiswa = students.filter((student) => student.score > 85);
console.log(syaratPenerimaBeasiswa); // output: [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]

// *array.reduce()* digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.
// contoh penggunaannya misalnya kita ingin menjumlahkan total score nilai siswa
const siswa = [
    {
        name: 'Harry',
        score: 60,
    }, 
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const jumlahNilaiSiswa = siswa.reduce((acc, student) => acc + student.score, 0);
console.log(jumlahNilaiSiswa); // output: 313

// *array.some()* digunakan apakah setidaknya ada satu dari deretan nilai array tersebut lolos berdasarkan kriteria yg sudah dituliskan dalam callback function
// contoh penggunaannya apakah deretan dalam nilai array terdapat angka genap, dan akan menghasilkan nilai boolean
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even); // output: true

// *array.find()* mirip dengan array.some(), bedanya find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.
// contoh penggunaannya apakah deretan dalam nilai array terdapat siswa dengan nama 'James'
const mahasiswa = [
    {
        name: 'Harry',
        score: 60,
    }, 
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const findJames = mahasiswa.find(student => student.name === 'James');
console.log(findJames); // { name: 'James', score: 88 }

// *array.sort()* berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei']; 
months.sort();
console.log(months); // output: [ 'April', 'Februari', 'Januari', 'Maret', 'Mei' ]

const angka = [1, 30, 4, 1000, 101, 121];
angka.sort();
console.log(angka); // output: [ 1, 1000, 101, 121, 30, 4 ]
// contoh penggunaan pada kedua pengurutan di atas menggunakan tipe data string.

// Untuk mengurutkan sesuai dengan kriteria, maka perlu membuat compare function tersendiri
const listedArray = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
    return a - b;
}
const sorting = listedArray.sort(compareNumber);
console.log(sorting); // output: [ 1, 4, 30, 1000 ]

// *array.every()* merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. 
// Kembalian dari array.every() adalah nilai Boolean.
const scores = [70,85,90];
const minimumScores = 65;
const examPassed = scores.every(score => score >= minimumScores);
console.log(examPassed); // output: true

// *array.forEach()* berfungsi untuk memanggil fungsi call back pada setiap iterasi index array
// melalui fungsi ini, kita dapat mengubah sintaks perulangan berdasarkan jumlah array secara impreatif menjadi deklaratif
// IMPERATIF
const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < nama.length; i++) {
    console.log(`Hello, ${nama[i]}!`);
}

// DEKLARATIF
const namaOrang = ['Harry', 'Ron', 'Jeff', 'Thomas'];
namaOrang.forEach((nama) => {
    console.log(`Hello, ${nama}!`);
});

// NOTE: namun ketika menggunakan forEach, kita tidak bisa menggunakan operator break; atau continue; pada proses perulangan
//          tetapi kita bisa menggunakannya di perulangan for (imperatif). Hal ini juga berlaku pada fungsi map dan filter
// contoh penggunaan operator continue; pada perulangan for
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue;
}
console.log(`Hello, ${names}!`);

// names.forEach((name) => {
//     if(name === 'Jeff') continue; // Tidak Bisa!
//     console.log(`Hello, ${name}`);
//   });