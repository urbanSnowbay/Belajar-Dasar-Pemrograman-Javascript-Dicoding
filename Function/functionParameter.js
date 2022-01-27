// parameter
function perkalian(x, y) {
    return 8 * 10;
}

// argument
perkalian(8, 10);

// function parameter
const user = {
    nama: "Haiqal",
    umur: 20,
    fullName: "Haiqal Utama"
}

function perkenalan({ nama, fullName}) {
    console.log(`${nama} is ${fullName}`);
}

perkenalan(user);

// default parameter
function eksponensial(baseNumber, angkaEksponen = 5) {
    let rumusEksponensial = baseNumber ** angkaEksponen;
    console.log(`${baseNumber}^${angkaEksponen} = ${rumusEksponensial}`)
}
eksponensial(2); // 2^5 = 32

// rest parameter
function sum (...angkas) {
    let hasil = 0;
    for(let angka of angkas) {
        hasil += angka;
    }
    return hasil
}
console.log(sum(2, 4, 6, 8, 10));




function sum(...sebuahAngka) {
    let masuk = 0;
    for(let angka of sebuahAngka) {
        masuk += angka;
    }
    return masuk;
}
console.log(sum(1,2,3,4,5));