/**
 * === Ini adalah standar membuat HTTP server ===
 */

import http from "http";

const server = http.createServer((req, res) => {
// - Ini untuk cek url yang diakses oleh client
        console.log(req.url);
// - Ini untuk cek statusCode
        console.log(req.statusCode);
        res.end();
})

server.listen(3000, () => {
        console.log("Server berjalan.........");
        
})