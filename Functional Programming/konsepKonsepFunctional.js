// *Pure function* merupakan fungsi yang mengharuskan untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80
// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, 

const luasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}
console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(8)); // 200.96
console.log(luasLingkaran(8)); // 200.96
// Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. 

// Pure Function dilarang untuk mengubah nilai yang berada di luar secara sengaja maupun tidak sengaja
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};
const person = {
    name: 'Bobo'
};
const newPerson = createPersonWithAge(18, person);
console.log({
    person,
    newPerson
});

// Manfaatkan Destructing Object daripada mengubah objek secara langsung
const membuatPersonDenganUmur = (umur, orang) => {
    return { ...orang, umur};
};
const orang = {
    nama: 'Haiqal'
};
const orangBaru = membuatPersonDenganUmur(20, orang);
console.log({
    orang,
    orangBaru
});

// *Immutability* berarti sebuah objek yang tidak boleh diubah setelah objek tersebut diubah
// ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru
const names = ['Hijau', 'Merah', 'Biru', 'Coklat'];
const newNames = names.map((namaBaru) => `${namaBaru}`); // *Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.*
console.log({
    names,
    newNames
});

// Contoh penggunaaan immutability bila ingin mengubah nilai dari sebuah objek
const user = {
    namaPertama: 'Harry',
    namaTerakhir: 'Protter' // ceritanya typo
};
const memperbaikiNamaTerakhir = (newNamaTerakhir, user) => {
    return { ...user, namaTerakhir: newNamaTerakhir }
}
const newUser = memperbaikiNamaTerakhir('Potter', user);
console.log(newUser);

// *Rekursif* merupakan teknik FP yang memanggil dirinya sendiri
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};
countDown(10);
// Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursif kita dapat membuat dan mengolah data structures seperti Tree dan Array.

// *Higher-Order-Function* merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.
// kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
const hello = () => {
    console.log('Hello');
} // menyimpan function dalam variabel
const say = (someFunction) => {
    someFunction();
} // memberikan function sebagai parameter pada fungsi lainnya
const sayHello = () => {
    return () => {
        console.log('Hello');
    }
} // mengembalikan function di dalam function.
hello();
say(hello);
sayHello()();

const jeneng = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopThrough(arr, action);
}
const newJeneng = arrayMap(jeneng, (names) => `${names}!`);
console.log({
    jeneng,
    newJeneng
});