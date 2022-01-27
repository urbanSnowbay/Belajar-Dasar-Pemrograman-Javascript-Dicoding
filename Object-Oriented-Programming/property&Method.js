// property
class Mail {
    constructor() {
        this.from = `pengirim@gmail.com`;
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`kamu mengirim: ${msg}, ke ${to}, dari ${from}.`);
            // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
            this.contacts.push(to);
    }
}
const emailPertama = new Mail();
emailPertama.sendMessage(`sebuah pesan`, `Utama`, `Haiqal`);

// Class Method
    //  const emailPertama = new Mail();
    // emailPertama.sendMessage(`sebuah pesan`, `Utama`, `Haiqal`);

// Static Method, menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone
    // class Mail {
    //     static isValidPhone(phone) {
    //         return typeof phone === 'number';
    //     }
    // }

// Constructor
//     class Mail {
    //     constructor(author) 
    //         this.from = `pengirim@dicoding.com`;
    //         console.log(`telah dipakai`, author);
    //     };
    // } const mail1 = new Mail("emailku@dicoding.com");