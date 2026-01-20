import express from "express";
import { getAllData, getAllAcara, postAcaraCreate } from "../controller/main.js";
import { cekAcara, cekData, postupdateAcara } from "../middleWare/middleWare.js";

const router = express.Router() ;
router.get("/peserta", getAllData, cekData);
router.get("/acara", getAllAcara, cekAcara);
router.patch("/update/:id", postAcaraCreate, postupdateAcara);

export { router };

