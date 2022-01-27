class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}

let json = '{"name": "Haiqal"}';

try {
    let pengguna = JSON.parse(json);

    if (!pengguna.name) {
        throw new ValidationError("'name' is required.")
    }

    if (!pengguna.age) {
        throw new ValidationError("'age' is required.")
    }

    console.log(pengguna.name);
    console.log(pengguna.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid Data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}