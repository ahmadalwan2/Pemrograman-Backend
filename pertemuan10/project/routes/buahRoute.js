/**
 * Ini wajib kalau mau buat projek dengan konsep express router
 */

import express from "express";
import { getData, apalah,  } from "../controller/buahController.js";
import { cekRole  } from "../middleWare/cekAkses.js";

const router = express.Router();
router.get("/", getData, cekRole);

const router2 = express.Router();
router2.get("/", apalah);

export { router, router2 };

