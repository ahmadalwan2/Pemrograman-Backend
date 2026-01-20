import { koneksi } from "../config/db.js";
import { resSuccess, resFailed } from "../payload/response.js";

const cekId = async(req, res, next) => {
        const id = id.params.id;

        const [data] = await koneksi.query(
            "SELECT * FROM produk WHERE id=?", [id]
        )

        if (data.length === 0) {
            return resFailed(res, 404, "Error", "Data tidak ditemukan", null);
        }
        next();
};

export { cekId };


