// // #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
// const myDate = new Date();
// // Nilai kembaliannya adalah bulan dalam bentuk angka (0 sampai 11), 0 berarti Januari.
// myDate.getMonth();

// // #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
// const tanggalSaya = new Tanggal(dateString);
// // Nilai kembaliannya adalah tahun, misalkan 2021.	
// tanggalSaya.getFullYear();

// // #3 parameter dalam bentuk number, misal 87400000
// const myTanggal = new date(miliseconds);
// // Nilai kembaliannya adalah tanggal dari 1 sampai 31.	
// myTanggal.getDate();

// // #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const sayaTanggal = new tanggalSaya(year, month, date, hour, second, minute, miliseconds);
// // Nilai kembaliannya adalah jam dari 0 sampai 23	
// sayaTanggal.getHours();

// ------------------------------------------------------------------- //

// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini

    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};
console.log(myAge('2001-10-06'));

const listOfContent = [1, 2, "President", {}];
console.log(Array.isArray(listOfContent)); // true

const splitText = "12:00:00".split(":");
console.log(splitText); // [ '12', '00', '00' ]

const hurufTerpisah = "12:00:00";
console.log(hurufTerpisah); // 12:00:00