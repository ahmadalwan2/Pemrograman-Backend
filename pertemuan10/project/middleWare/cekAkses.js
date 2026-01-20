/**
 * Buat fungsi untuk mengecek kondisi sebelum menjalankan routnya
 * Cek validasi inputan dari user
 */

const cekRole = (req, res, next) => {
    const user = true;
    if (!user) {
       return res.status(403).json({message: "Maaf anda tidak punya akses"});
    }
    next();
}

export { cekRole };