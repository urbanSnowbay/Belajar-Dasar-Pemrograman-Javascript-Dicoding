let jjson = '{ bad json }';
try {
    let pengguna = JSON.parse(jjson);
 
    console.log(pengguna.name);
    console.log(pengguna.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}