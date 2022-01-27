async function main() {
    try {
        console.log("Fetching username...");
        const username = await fetchUsername();
        console.log(`You are logged in as ${username}`);
        console.log("Welcome!");
    } catch(e) {
        console.log("Username tidak ditemukan");
    }
}