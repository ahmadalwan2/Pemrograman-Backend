import mysql from "mysql2/promise";

const koneksi = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'db_praujian',
  // antrian 
  waitForConnections: true,
  // maksimal limit
  connectionLimit: 10,
  queueLimit: 0,
});

const cekKoneksi = async () => {
        try {
            const result = await koneksi.getConnection();
            console.log("Koneksi sedang berjalan");;
            result.release();
            return true;
        } catch (error) {
            console.log("Gagal:",  error.message)
        }
}

export { koneksi, cekKoneksi };