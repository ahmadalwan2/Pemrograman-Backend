import http from "http";

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.statusCode);
    
    const data = [
        {id: 1, nama_jurusan: "PPW"},
        {id: 2, nama_jurusan: "PPW"},
        {id: 3, nama_jurusan: "PSJ"}
    ];
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(4000, () => {
    console.log("Server sedang berjalan.....");
})

