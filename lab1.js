<<<<<<< HEAD
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Novodvorsky');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
=======
console.log("Hello, Novodvorskyi1");
>>>>>>> 5fb0a6efbb7563b21fb9363d3d34f02efddec90f
