function induk() {
    let nama = "Haiqal";

    function salam() {
        console.log(`Halo ${nama}, semoga sehat selalu`);
    }
    salam();
}
induk(); // Halo Haiqal, semoga sehat selalu

function init() {
    var jeneng = "Haiqal";

    function greet() {
        console.log(`Piye kabarmu lek ${jeneng}`);
    }
    return greet;
}

let wedhos = init();
wedhos(); // Piye kabarmu lek Haiqal

let hadeh = () => {
    let counter = 0;
    return () => {
        return ++counter;

    };
}

let tambahBaru = hadeh();
console.log(tambahBaru());
console.log(tambahBaru());
console.log(tambahBaru());