import { data, acara } from "../models/data.js";
import { success, failed } from "../response/response.js";

const getAllData = (req, res) => {
        return success(res, 200, "Data peserta", data);
};

const getAllAcara = (req, res) => {
        return success(res, 200, "Data acara", acara);

};

const postAcaraCreate = (req, res) => {
    const acaraBaru = { nama_acara, tanggal, kuota};
    acara.push(acaraBaru);

    return success (res, 200, "Data acara berhasil dibuat", acaraBaru);
} 

const patchAcaraUpdate = (req, res)  => {

    const { id } = req.params;
    const { nama_acara, tanggal, kuota } = req.body;

    if (!nama_acara || !tanggal || !kuota) {
        return failed (res, 400, "Nama, Tanggal, Kuota tidak boleh kosong")
    };

    const acaraUpdate = data.findIndex(item => item.id == parseInt(id));
    if (acaraUpdate === -1) {
        return failed (res, 400, "Data tidak ditemukan")
    };

    acara[acaraUpdate].nama_acara = nama_acara;
    acara[acaraUpdate].tanggal = tanggal;
    acara[acaraUpdate].kuota = kuota;

    delete acara[acaraUpdate].peserta;

    return success(res, 200, "Data berhasil di update");
}

const deleteAcara = (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((item) => item.id === id);

    if (index === -1) {
        return failed (res, 400, "Data tidak ditemukan");
    }

    const deleted = data.splice(index, 1);
    return success(res, 200, "Data berhasil dihapus", deleted);
}

    const joinAcara = (req, res) => {
    const { id } = req.params;
    const { pesertaId } = req.body;

    const acaraTarget = acara.find(item => item.id == parseInt(id));
    if (!acaraTarget) {
        return failed(res, 404, "Maaf, data acara tidak ditemukan");
    }

    const peserta = data.find(item => item.id == pesertaId);
    if (!peserta) {
        return failed(res, 404, "Maaf, data peserta tidak ditemukan");
    }

    if (acaraTarget.peserta.includes(pesertaId)) {
        return failed(res, 400, "Maaf, peserta sudah terdaftar");
    }

    if (acaraTarget.peserta.length >= acaraTarget.kuota) {
        return failedaku (res, 400, "Maaf, kuota sudah penuh");
    }

    acaraTarget.peserta.push(pesertaId);

    return success(res, 200, "Peserta berhasil ditambahkan", acaraTarget);
};

const getAcaraDetail = (req, res) => {
  const { id } = req.params;

  const acaraTarget = acara.find(item => item.id == parseInt(id));
  if (!acaraTarget) {
    return failed(res, 404, "Maaf, data acara tidak ditemukan");
  }

  const pesertaLengkap = acaraTarget.peserta.map(pid => {
    return data.find(p => p.id === pid);
  });

  const detail = {
    ...acaraTarget,
    peserta: pesertaLengkap
  };

  return success(res, 200, "Detail acara", detail);
};

export { getAllData, getAllAcara, postAcaraCreate, patchAcaraUpdate, deleteAcara, joinAcara, getAcaraDetail }