const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue;
}
console.log(`Hello, ${names}!`);