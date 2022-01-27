const stokKopi = require('./statee')

const makeCoffee = (type, miligrams) => {
    if (stokKopi[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 80);

console.log(stokKopi);