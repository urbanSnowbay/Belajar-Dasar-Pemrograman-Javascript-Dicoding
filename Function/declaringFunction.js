// basic
function greeting() {
    console.log("Good Morning!");
}
greeting();

// lawak
function dataDiri(nama, tinggiBadan) {
    if (tinggiBadan === "Pendek") {
        console.log(`Kok lu pendek banget sih ${nama}`);
    } else if (tinggiBadan === "Tinggi") {
        console.log(`Kok lu tinggi banget sih ${nama}`);
    } else {
        console.log(`Iya dehh, terserah lu ${nama}`);
    }
}
dataDiri("Haiqal", "ngaco lu");

// function sebagai me-return untuk mengkalkulasi perhitungan matematika
function matematika(a, b) {
    return a * b;
}
let hasil = matematika(10, 2)
console.log(hasil);

// improvisasi dari lawak
function salam(nama, bahasa) {
    if (bahasa === "prancis") {
        console.log(`bonjour woi ${nama}`);
    } else if (bahasa === "jepang") {
        console.log(`おはようございます ${nama}`);
    } else {
        console.log(`Pagi tod ${nama}`);
    }
}
let panggil = salam("Haiqal", "jepang");
console.log(panggil);

// Expression Function (Anonymous Function)
const fungsiDiDalamVariabel = function(jeneng, laptop) {
    if (laptop === "acer") {
        return "Waw, pasti laptop lu bagus yaa " + jeneng + "!";
    } else if (laptop === "asus") {
        return "Waw, pasti laptop lu biasa aja yaa " + jeneng + "!";
    } else if (laptop === "toshiba") {
        return "Waw, pasti laptop lu jelek yaa " + jeneng + "!";
    } else {
        return "Lu ga punya laptop ya? kasian " + jeneng;
    }
};
console.log(fungsiDiDalamVariabel("Haiqal", "acer"));

// knowledge check: function
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
//