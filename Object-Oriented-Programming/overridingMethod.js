class Mail {
    constructor (author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`You send: ${msg}, to: ${to}, from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class Whatsapp extends Mail {
    constructor(username, isBusinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBusinessAccount = isBusinessAccount;
    }
    myProfile() {
        return `My name is ${this.username}, ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}
const wa1 = new Whatsapp(`dicoding`, true, +628123456789);
console.log(wa1.myProfile());
wa1.sendMessage('halo', 089000999888);

/*NOTE PENTING
super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.

super.methodName(...) digunakan untuk memanggil parent method.*/

