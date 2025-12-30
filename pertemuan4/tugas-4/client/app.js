import http from "http";

const request = http.request (
    "http://localhost:4000/",

    (res) => {
    let data = "";
    res.on("data", (d) => {
        data += d
    });
    res.on("end", () => {
        console.log(JSON.parse(data));
    });
});
request.end();