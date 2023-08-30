const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send("post data");
});

app.put("/", (req, res) => {
    res.send("update data");
});

app.delete("/", (req, res) => {
    res.send("delete data");
});
// req adalah singkatan dari request yang isinya dikirimkan oleh client.
// contoh seperti body, parameter, query
// res adalah singkatan dari respons yang isinya kita kirim ke client
// contoh seperti data, json, html, dan codeHTTP (default:200)

app.listen(3000, () => {
    console.log("Hai Bang, Servermu udah jalan di http://localhost:3000");
});

// Jalaninnya dengan menulis node app.js di terminal
// Matikan server dengan ctrl+c
