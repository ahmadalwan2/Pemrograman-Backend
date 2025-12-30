/**
 * === Ini adalah standar membuat HTTP server ===
 */

import http from "http";

const server = http.createServer((req, res) => {
// - Ini untuk cek url yang diakses oleh client
        console.log(req.url);
// - Ini untuk cek statusCode
        console.log(req.statusCode);

        // res.setHeader("Content-Type", "text/plain");
        // res.end("Ini data yang dikirimkan dari server, buat client");

        if (req.url ==="/data") {
            res.setHeader("Content-Type", "text/plain");
            res.write("Ini data yang dikirmkan dari server dan client");
            res.end();
        }   else {
            res.write("Selamat datang");
            res.end();
        }
});

server.listen(3000, () => {
        console.log("Server berjalan.........");
        
})