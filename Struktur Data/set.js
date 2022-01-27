const numberSet = new Set([1, 2, 3, 2, 1]);
console.log(numberSet); // Set(3) { 1, 2, 3 }

const angkaSet = new Set([1, 4, 6, 3, 1]);
angkaSet.add(5);
angkaSet.add(6);
console.log(angkaSet); // Set(5) { 1, 4, 6, 3, 5 }

const setAngka = new Set([1, 4, 6, 3, 1]);
setAngka.add(5);
setAngka.add(6);
setAngka.delete(1);
console.log(setAngka); // Set(4) { 4, 6, 3, 5 }
