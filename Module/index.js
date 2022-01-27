import {coffeeStock as stock, isCoffeeMachineReady} from "./state.js";

const displayStock = stok => {
    for (const tipeKopi in stok) {
        console.log(tipeKopi);
    }
}
displayStock(stock);

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
makeCoffee("robusta", 80);

console.log(stock);
console.log(isCoffeeMachineReady);