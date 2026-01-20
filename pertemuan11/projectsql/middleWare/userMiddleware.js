import { koneksi } from "../config/db.js";

const cekId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [data] = await koneksi.query("SELECT * FROM user WHERE id_user=?", [id]);

    if (data.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

const cekDataPost = (req, res, next) => {
  const { username, email, status } = req.body;

  if (!username || !email || !status) {
    return res.status(400).json({ message: "Username, email, status wajib diisi" });
  }

  next();
};


const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: err.message });
};

export { cekId, cekDataPost, errorHandler };
