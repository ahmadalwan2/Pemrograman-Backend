import express from "express";
import {data} from "./models/data.js";


// Ini wajib ada kalau kita mau menerima kiriman data JSON
const app = express();

app.use(express.json());

// Membuat root utama
app.get("/", (req, res) => {
// style 1
    // res.json({message: "Sukses", data});

// style 2
// Untuk menentukan code yang ingin kita tampilkan
    res.status(200).json({message: "Sukses", data})
});

app.get("/santri/:id", (req, res) => {

// Ini untuk destractring
    // const {id}

    const id = req.params.id;
    const result = data.find((snt) => snt.id === parseInt(id));

    if (!result) {
// return berfungsi untuk mengeluarkan dari program
// Jika id tidak sesuai data yang ada, maka tampilkan respon ini 
     return res.status(404).json({message: "Data tidak ditemukan", data: null})        
    }
     return res.status(200).json({message: "Data Santri", data: result})  // data: result, Karena data sudah disimpan kedalam result    
   
});

app.get("/santri", (req, res) => {
// Bagaimana jikalau nggak ada query nya, Maka tampilkan semua data 
// Jika ada query nya maka saya cek query tsbt

    const nama = req.query.nama;
    if (!nama) {
        return res.status(200).json({message: "Data santri", data});
    } else {
        const hasil = data.find((snt) => snt.nama === nama);
        if (hasil) {
            return res.status(200).json({message: "Data santri", data: hasil});
        } else {
            return res.status(404).json({message: "Data tidak ditemukan", data: null});
        }
    }

});

app.post("/santri", (req, res) => {
// ini untuk menangkap data dari client
    // console.log(req.body.jurusan);

// {} = konsep distructring untuk id yang lebih dari 1
    const {nama, nilai} = req.body;

    const dataBaru = ({id: data.length + 1 , nama, nilai});
    data.push(dataBaru)
    res.status(201).json({message: "Data berhasil ditambahkan", data})
})

// app.delete("/santri/:id", (req, res) => {
//     const id = req.params.id;
//     const parse = parseInt(id)
//     data.slice(parse - 1, 1);
//     res.status(200).json({message: "Data berhasil dihapus", data});

// });

app.delete("/santri/:id", (req, res) => {
    const id = req.params.id
    const parse = parseInt(id)
    if (id > 0 && id <= data.length) {
        data.splice(parse - 1, 1);
        res.status(200).json({ message: "Data berhasil dihapus", data });
    } 
});

app.put("/santri/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nama, jurusan, nilai } = req.body;

    // cari santri berdasarkan id
    const dataUpdate = data.find((snt) => snt.id === id);

    if (!dataUpdate) {
        return res.status(404).json({ message: "Data tidak ditemukan", data: null });
    }

    // update field yang dikirim
    if (nama) dataUpdate.nama = nama;
    if (jurusan) dataUpdate.jurusan = jurusan;
    if (nilai) dataUpdate.nilai = nilai;

    return res.status(200).json({ message: "Data berhasil diupdate", data });
});



app.listen(3000, () => {
    console.log("server berjalan...");
});