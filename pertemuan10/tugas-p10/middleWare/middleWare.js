import { data, acara} from "../models/data.js"

const cekData = (req, res, next) => {
    if (!data) {
    return failed (res, 400, "Data tidak ditemukan", data)
    } 
    next();
}

const cekAcara = (req, res, next) => {
    if (!acara) {
        return failed (res, 400, "Data tidak ditemukan", acara)
    } 
    next();
}

const postupdateAcara = (req, res, next) => {
    
    const {nama_acara, tanggal, kuota} = req.body;
    if (!nama_acara || !tanggal || !kuota) {
        return failed (res, 400, "Nama, tanggal, Kuota tidak boleh kosong")
    } 
    next();
}
export { cekData, cekAcara, postupdateAcara };