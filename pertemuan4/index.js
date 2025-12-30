import fs from "fs";

/**
 * Susunan sintax menulis file secara Synchronous
 * fs.writeFileSync("nama_file", "isi file/datanya")
 */


console.log(fs.readFileSync("tes.txt", "utf-8"));
