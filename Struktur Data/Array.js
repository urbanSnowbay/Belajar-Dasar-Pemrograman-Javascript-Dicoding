let arraySaya = ["Haiqal", 20, 2.2, true]
console.log(arraySaya);
console.log(arraySaya[0]);
console.log("Panjang nilai arraySaya adalah " + arraySaya.length + ".");

// push()
let myArray = ["Haiqal", 8, 8.2, true]
myArray.push(20);
console.log(myArray);

// pop() untuk mengeluarkan data atau elemen terakhir pada array 
let arrayGue = ["Haiqal", 5, 5.2, true]
arrayGue.pop()
console.log(arrayGue);

//  shift() digunakan untuk *mengeluarkan* elemen pertama dari array, unshift() digunakan untuk *menambahkan* elemen di awal array
let arrayAntum = ["Antum Bahlul", 69, 6.9, false]
arrayAntum.shift()
arrayAntum.unshift("Antum Vintar")
console.log(arrayAntum);

// splice() digunakan untuk menghapus elemen pada array
let deleteArray = ["Lucu", 8, 9.0, false]
deleteArray.splice(1, 1) // menghapus [index 1] sebanyak 1 elemen
console.log(deleteArray);

// Kuis Coding : Array
let evenNumber = []

for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        evenNumber.push(i);
    }
}
console.log(evenNumber);