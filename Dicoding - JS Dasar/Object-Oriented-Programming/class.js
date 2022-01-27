// membuat class menggunakan function (pendekatan prototype)
function Mail() {
    this.from = `pengirim@dicoding.com`;
};

Mail.prototype.sendMessage = function n(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};
const mail1 = new Mail();
mail1.sendMessage(`Hallo`, `penerima@dicoding.com`);

// membuat class menggunakan function (tanpa pendekatan prototype)
function sebuahMail() {
    this.dari = `pengirim@gmail.com`,
    this.kirimPesan = function(pesan, ke) {
        console.log(`kami mengirim: ${pesan} ke ${ke} dari ${this.dari}`);
    }
};
const mail2 = new sebuahMail();
mail2.kirimPesan(`Haiqal`, `penerima@gmail.com`);

// menggunakan prototype
class elektronikMail {
    constructor() {
        this.from = `pengirim@dicoding.com`
    }

    sentPesan(msg, to) {
        console.log(`kamu mengirim: ${msg} kepada ${to} dari ${this.from}`);
    };
}
const pesanPertama = new elektronikMail();
pesanPertama.sentPesan(`wazzup`, `gatau`);

const mail1 = new Mail("emailku@dicoding.com");