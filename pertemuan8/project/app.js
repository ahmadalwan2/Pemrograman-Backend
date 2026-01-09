import express from "express";
import { getAllData, getbyID, getSantri, putbyId, getByJurusan, getNilaiTertinggi, postSantri, deleteSantri  } from "./controller/santriController.js";

const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/santri", getAllData);
app.get("/santri/search", getSantri);
app.get("/santri/:jurusan", getByJurusan);
app.get("/santri/nilai/tertinggi", getNilaiTertinggi);
app.get("/santri/:id", getbyID);
app.put("/santri/:id", putbyId);
app.post("/santri", postSantri);
app.delete("/santri/:id", deleteSantri);

app.listen(PORT, () => {
    console.log("Server dijalankan");
    
})