const { get } = require("express/lib/response");

const myMap = new Map ([
    ["ini adalah pulau = ", "Indonesia"],
    ["Terdiri dari = ", "17.658 pulau"],
    [3, "Saya bangga tinggal di Indonesia"]
]);
console.log(myMap);

// methode get() dan set()
const ibukota = new Map ([
    ['Indonesia', 'Jakarta'],
    ['Japan', 'Tokyo'],
    ['England', 'London'],
])
console.log(ibukota.size); // 3
console.log(ibukota.get('Indonesia')); // Jakarta

ibukota.set("India", "New Delhi");
console.log(ibukota.size); // 4
console.log(ibukota.get("India")); // New Delhi

// Kuis Coding : Map
const currency = new Map ([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
]);
let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

// lol
const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];
console.log(artistsAndSongs);

//
const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);