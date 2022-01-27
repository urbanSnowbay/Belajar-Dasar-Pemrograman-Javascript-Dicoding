try {
    console.log("Awal blok try");
    oh;
    console.log("Akhir blok try");
} catch (error) {
    console.log(error.name); // Awal blok try
    console.log(error.message); // ReferenceError, oh is not defined
    console.log(error.stack); // *menunjukkan jumlah baris pada error yang terjadi*
}

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Akan tetap dieksekusi");
}