import express from "express";
import { getProduk, addProduk } from "../controller/controll.js";

const router = express.Router();
router.get("/", getProduk);
router.post("/tambah", addProduk);

export { router };