// FP gaya imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNames = [];
for (let i = 0; i<names.length; i++) {
    newNames.push(`${names[i]}`);
}
console.log(newNames);

// FP gaya deklaratif (LEBIH SINGKAT!!)
const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const namaBaru = nama.map((jeneng) => `${jeneng}`);
console.log(namaBaru);