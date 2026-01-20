import express from "express";
import { getAllData, getAllAcara, postAcaraCreate, patchAcaraUpdate, deleteAcara, joinAcara, getAcaraDetail } from "./controller/main.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.get("/peserta", getAllData);
app.get("/acara", getAllAcara);
app.patch("/acara/update/:id", patchAcaraUpdate);
app.post("/acara/create", postAcaraCreate);
app.post("/acara/join/:id", joinAcara);
app.get("/acara/detail/:id", getAcaraDetail);
app.delete("/acara/delete/:id", deleteAcara);



app.listen(PORT, () => {
    console.log("Server dijalankan");
})