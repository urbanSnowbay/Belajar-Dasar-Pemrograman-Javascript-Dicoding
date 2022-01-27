let salam = "Indonesia"
let greeting = null

switch (salam) {
    case "Inggris":
        greeting = "good morning!";
        break;
    case "Indonesia":
        greeting = "Selamat pagi"
        break;
    case "Jepang":
        greeting = "Ohayou Gozaimas!"
        break;
    default:
        greeting = "Selamat morning"
}

console.log(greeting);