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

        // --- Ini simulasi menggunakkan kondisi if-else ---
        // if (req.url ==="/data") {
        //     res.setHeader("Content-Type", "text/plain");
        //     res.write("Ini data yang dikirmkan dari server dan client");
        //     res.end();
        // }   else {
        //     res.write("Selamat datang");
        //     res.end();
        // }

        // --- Ini simulasi menggunakkan type filenya JSON ---
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Content-Type", "application/json"); 
        if (req.url === '/data') { 
            res.write(JSON.stringify({ message: "sukses" })); 
            res.end(); } 
        else if (req.url === "/user") { 
        const user = { id: 1, nama: "Ahmad", hobi: ["ngoding", "berkultum", "membaca"] }; 
            res.write(JSON.stringify(user)); 
            res.end(); } 
        else { 
            res.writeHead(404); 
            res.end(JSON.stringify({ 
            error: "Endpoint tidak ditemukan" })); }
});

server.listen(3000, () => {
        console.log("Server berjalan.........");
})