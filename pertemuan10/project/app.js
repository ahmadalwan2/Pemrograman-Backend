import express from "express";
import { router, router2 } from "./routes/buahRoute.js";

const app = express();
const PORT = 5000;

/**
 * Metode grouping route
 * Bisa pake middleware app.use()
 */

/**
 * Ini app level middleware app.use()
 */

// app.use((req, res, next) => {
//     console.log("Ini dari middleware yang pertama", req.url);
//     next();
// });

app.use("/api/v1/buah", router);
app.use("/api/v1/buah/apalah", router2);

app.use((req,res, next) => {
    console.log("Ini dari middleware yang pertama",req.url);
    next()
})


app.listen(PORT, () => {
    console.log("server sedang berjalan...");
});