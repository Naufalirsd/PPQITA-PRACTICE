// contoh paling sederhana di express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello-world");
});

app.listen(3000, () => {
    console.log("server jalan di http://localhost:3000");
});
