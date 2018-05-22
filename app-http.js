const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const filePath = (req.url === '/') ? ('./public/index.html') : ('./public' + req.url);

    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(404);
            res.end("ERROR 404\nFile not found.");
        }
        else {
            res.writeHead(200);
            res.write(file);
        }
        res.end();
    });
});

server.listen('3000', () => {
    console.log('Server is running.');
});