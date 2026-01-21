const express = require ("express");
const router = require("./routes/routes.js");

const app = express();
const PORT = 4000;

app.use("/tes", router);
app.listen(PORT, () => {
    console.log(`Server sedang berjalan di ${PORT}`);
    
})