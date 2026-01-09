import { data } from "../models/data.js";
import { responSukses } from "../response/res.js";


/**
 * Controller ini nanti nya untuk menaruh fungsi-fungsi,
 * Yang digunakkan untuk mengelola logika proses,
 * Dalam kasus ini berarti kita akan membuat fungsi,
 * Tampil data, get id, update, delete
 */

const getAllData = (req, res) => {
  return responSukses(res, 200, "Data santri", data);
};

const getSantri = (req, res) => {
  const nama = req.query.nama;

  if (!nama) {
    return responSukses(res, 200, "Data santri", data);
  }

  const hasil = data.find((snt) => snt.nama === nama);

  if (hasil) {
    return responSukses(res, 200, "Data santri", hasil);
  } else {
    return responSukses(res, 404, "Data tidak ditemukan", null);
  }
};

const getbyID = (req, res) => {
  const id = parseInt(req.params.id);
  const santriID = data.find((item) => item.id === id);

  if (!santriID) {
    return responSukses(res, 404, "Data tidak ditemukan", null);
  }
  return responSukses(res, 200, "Data santri", santriID);
};

const putbyId = (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, jurusan, nilai } = req.body;

  const index = data.findIndex((dta) => dta.id === id);

  if (index === -1) {
    return responSukses(res, 404, "Data tidak ditemukan", null);
  }

  if (nama) data[index].nama = nama;
  if (jurusan) data[index].jurusan = jurusan;
  if (nilai) data[index].nilai = nilai;

  return responSukses(res, 200, "Data berhasil diupdate", data);
};

const postSantri = (req, res) => {
  const { nama, nilai } = req.body;

  const dataBaru = { id: data.length + 1, nama, nilai };
  data.push(dataBaru);

  return responSukses(res, 201, "Data berhasil ditambahkan", data);
};

const getByJurusan = (req, res) => {
  const jurusan = req.params.jurusan;
  const hasil = data.filter((snt) => snt.jurusan === jurusan);

  if (hasil.length === 0) {
    return responSukses(res, 404, "Tidak ada santri dengan jurusan tersebut", null);
  }

  return responSukses(res, 200, "Data santri berdasarkan jurusan", hasil);
};

const getNilaiTertinggi = (req, res) => {
  if (data.length === 0) {
    return responSukses(res, 404, "Data kosong", null);
  }

  const tertinggi = data.reduce((max, curr) => (curr.nilai > max.nilai ? curr : max));
  return responSukses(res, 200, "Santri dengan nilai tertinggi", tertinggi);
};


const deleteSantri = (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  if (index === -1) {
    return responSukses(res, 404, "Data tidak ditemukan", null);
  }

  const deleted = data.splice(index, 1)[0];
  return responSukses(res, 200, "Data berhasil dihapus", deleted);
};

export { getAllData, getbyID, getSantri, putbyId, getByJurusan, getNilaiTertinggi, postSantri, deleteSantri };
