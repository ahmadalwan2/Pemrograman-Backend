import express from "express";
import { getUser, getId, deleteId, postId, patchId  } from "../controller/userController.js";
import { cekDataPost, cekId } from "../middleWare/userMiddleware.js";

const router = express();

router.get("/", getUser);
router.get("/cari/:id",cekId, getId);
router.post("/tambah", cekDataPost, postId);
router.patch("/update/:id", cekId, cekDataPost, patchId);
router.delete("/delete/:id", cekId, deleteId);

export default router;