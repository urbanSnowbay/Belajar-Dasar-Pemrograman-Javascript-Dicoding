let json = '{ "name": "Yoda", "age": 20 }';
try {
    // fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object.
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log("----------------------------");

// Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror dan ditangkap oleh blok catch
let jjson = '{ bad json }';
try {
    let pengguna = JSON.parse(jjson);
 
    console.log(pengguna.name);
    console.log(pengguna.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log("----------------------------");

// Operator throw akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch.
let haiqal = '{"age" : 20}';
try {
    let pemakai = JSON.parse(haiqal);

    if (!pemakai.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(pemakai.name);
    console.log(pemakai.age);
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

console.log("----------------------------");

let namaOrang = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(namaOrang);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); 
    console.log(user.age);  
} catch (error) {
    // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi.
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}