// tanpa Spread Operator
const tanpaSpreadOperator = ["Pecel lele", "Gorengan", "Seafood", "Sayur2an"]
console.log(tanpaSpreadOperator);

// dengan Spread Operator
const denganSpreadOperator = ["Pecel lele", "Gorengan", "Seafood", "Sayur2an"]
console.log(...denganSpreadOperator);

// tanpa Spread Operator
const noSpreadOperator = ["Pecel lele", "Gorengan", "Seafood", "Sayur2an"]
const noSpreadOperator1 = ["satu", "dua", "tiga", "empat"]
const favorit = [noSpreadOperator, noSpreadOperator1]
console.log(favorit);

// dengan Spread Operator
const withSpreadOperator = ["Pecel lele", "Gorengan", "Seafood", "Sayur2an"]
const withSpreadOperator1 = ["satu", "dua", "tiga", "empat"]
const myFavorite = [...withSpreadOperator, ...withSpreadOperator1]
console.log(myFavorite);

// Object Literal dengan Spread Operator
const obj1 = {
    firstName: "Haiqal",
    lastName: "Utama",
}
const obj2 = {
    age: 20,
    height: 150,
}
const newObj = {...obj1, ...obj2}
console.log(newObj);