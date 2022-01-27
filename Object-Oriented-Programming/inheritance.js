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
    constructor() {
        super();
        this.username = "Dicoding";
        this.isBusinessAccount = true;
    }
    myProfile() {
        return `My name is ${this.username}, ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
}
const wa1 = new Whatsapp(08123456789);
console.log(wa1.myProfile());
wa1.sendMessage('halo', 089000999888);
