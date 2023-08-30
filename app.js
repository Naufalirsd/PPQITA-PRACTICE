const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Hai Bang, Servermu udah jalan di localhost:3000");
});
// Jalaninnya dengan menulis node app.js di terminal
