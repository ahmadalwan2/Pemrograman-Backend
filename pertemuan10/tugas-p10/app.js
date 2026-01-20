import express from "express";
import { router } from "./routers/router.js";

const app = express();
const PORT = 3002;

app.use("/datapeserta", router);
app.use("/dataacara", router);
app.use("/updateacara", router);

app.listen(PORT, () => {
    console.log("Server dijalankan");
})