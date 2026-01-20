import mysql from 'mysql2/promise';

/**
 * Variable koneksi ini, cuma buat konfig susunan koneksinya
 * Nah kalau konfig sudah dibuat maka perlu dicek koneksinya
 * sudah benar atau masih salah
 */
const koneksi = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'db_praktikum2026',
  waitForConnections: true, // ini kaya mau buat antrian untuk koneksi berikutnya
  connectionLimit: 10, // maksimal koneksi yang bisa dibuat dalam 1 waktu
  queueLimit: 0, // kalau di isi 0 , maka antrian koneksinya unlimited
});

/**
 * Buat fungsi untuk ngecek koneksinya berjalan atau nggak
 * Jangan lupa sifatnya DB itu promise, Maka make async await
 */

  const cekKoneksi = async () => {
        try {
            const hasil = await koneksi.getConnection(); // Jalankan perintah koneksinya
            console.log("Koneksi DB sedang berjalan");
            
            hasil.release(); // Jika sudah berhasil dijalankan dan sudah dipakai
            return true;
        } catch (error) {
            console.log("Gagal:", error.message);
        }
  }

export { koneksi, cekKoneksi };