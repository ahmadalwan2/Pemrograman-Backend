import { koneksi } from "../config/db.js";
import { resSuccess, resFailed } from "../payload/response.js";

const getProduk = async (req, res) => {
        try {
            const sql = "SELECT * FROM produk";
            const [data] = await koneksi.query(sql);

            return resSuccess(res, 200, "Data sukses ditampilkan", "Data Produk", data);
        } catch (error) {
            return resFailed(res, 404, "Data gagal ditampilkan", error.message)
        }
}

const addProduk = async (req, res) => {
        try {
            const { nama_produk, stok, harga, created_at } = req.body;
            const [data] = await koneksi.query("INSERT INTO produk (nama_produk, stok, harga, created_at) VALUES (?, ?, ?, NOW()) ", [
                nama_produk, stok, harga, created_at
            ]
        );

        const [dataId] = await koneksi.query(
            "SELECT * from produk WHERE id=?", [data.insertId]
        )
        return resSuccess(res, 201, "Success", "Data berhasil ditambahkan", dataId)
        } catch (error) {
            return resFailed(res, 400, "Error", error.message);
        }
}
export { getProduk, addProduk };