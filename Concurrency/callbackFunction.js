const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
orderCoffee(coffee => {
    console.log(coffee)
});

/* Contoh Callback Function untuk membuat adonan kue 
1. Menyiapkan bahan
2. Membuat adonan
3. Memasukkan adonan ke cetakan
4. Memanggang adonan */

// Contoh Callback Hell secara synchronous
function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}

// Contoh Callback Hell secara asynchronous
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

// Contoh Callback Hell menggunakan Promise
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}