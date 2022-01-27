// Constructuring Promise Object
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat")
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);

// Consuming Promises
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup, bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolveValue => {
    console.log(resolveValue);
}
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

/* prinsip separation of concern onRejected with catch method
catchStock()
    .then(handleSuccess)
    .catch(handleFailure); */

checkStock().then(handleSuccess, handleFailure);

// Chaining Promises
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const cekStok = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup, Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!")
        }, 2000);
    });
};

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Sebentar lagi kopi akan jadi...")
        });
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

// Chaining Promises Using async-await
async function makeEspresso() {
    try {
        const cekKetersediaan = await checkAvailability();
        console.log(cekKetersediaan);

        const stokCek = await cekStok();
        console.log(stokCek);

        const promises = await Promise.all([boilWater(), grindCoffeeBeans()]);
        console.log(promises);

        const coffee = await brewCoffee();
        console.log(coffee);

    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeEspresso();

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return cekStok();
//         })
//         // Promise.all()
//         .then((value) => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffeeBeans()];
//             return Promise.all(promises);
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }
 
// makeEspresso();
function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");

async function main() {
    try {
        console.log("Fetching username...");
        const username = await fetchUsername();
        console.log(`You are logged in as ${username}`);
        console.log("Welcome!");
    } catch(e) {
        console.log("Username tidak ditemukan");
    }
}
