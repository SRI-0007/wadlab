const http = require('http');
console.log("File started");
const server = http.createServer((req, res) => {
    res.write("Hello from Node.js server");
    res.end();
});
server.listen(5001, () => {
    console.log("Server running at http://localhost:5001");
});


