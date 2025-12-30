import http from "https";

/**
 * Menentukan jenis request apa saja yang ingin dieksekusi
 * Bisa pakai GET, PUT, DELETE, POST    
 */

const request = http.request (
    "https://jsonplaceholder.typicode.com/users",
    (res) => {
    
    res.on("data", (data) => {
        console.log(data.toString());
    });

    // - JIka ada error ketika menampilkan data API
    res.on("error", (err) => {
        console.log(err.message);
    })
    });

/**
 * Ini digunakkan untuk kalau ternyata pas ngakses ke server itu ada error
 * Contoh : waktu tertalu lama (timeout), url nya salah
 */
request.on("error", (err) => {
    console.log("Error", err.message);
})
// - Digunakkan untuk mengakhiri request
request.end();