const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 9;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}
/*  keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee()
 *  keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.
 *  Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled).
 
        async function makeCoffee() {
            const coffee = await getCoffee();
            console.log(coffee);
        }
        makeCoffee(); */

// Handle onRejected using async-await
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee)
    } catch (rejectedReason) {
        console.log(rejectedReason)
    }
}
makeCoffee();