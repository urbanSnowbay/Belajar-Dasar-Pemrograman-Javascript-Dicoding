// atribut = variabel yang digunakan untuk menyimpan nilai
// method = fungsi yang digunakan untuk menyimpan proses

// contoh oop = karakteristik kucing seperti (berat kucing, warna kucing, tinggi kucing) merupakan contoh atribut dari sebuah objek (oop),
// sedangkan kemampuan (berlari, melompat, dan tidur) merupakan contoh method dari sebuah objek (oop). 

const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`You send: ${msg} to: ${to} from ${this.from}`)
    }
};

console.log(mail.from); // pengirim@dicoding.com
mail.sendMessage(`Apa kabar`, `penerima@dicoding.com`); // You send: Apa kabar to: penerima@dicoding.com from: pengirim@dicoding.com