// contoh api untuk menerima data
const express = require("express");

const app = express();

app.use(express.json());

/**
 * 
 * contoh data yg dikirimkan
 * header:
 * Content-Type: application/json
 * body:
 {
  "id":"138",
  "name":"ariska"
}
 */
app.post("/api/user", (req, res) => {
    console.log(req.body);
    let data = req.body;

    // validasi data yg sederhana
    if (!data || !data.name) {
        return res.status(400).send("harus ada nama");
    }

    res.send("hello " + name);
});

app.listen(3000, () => {
    console.log("server run in http://localhost:3000");
});

// hanya bisa jalan di thunder client/postman. tidak bisa jalan di browser
// pastikan path diawal oleh slash "/" dengan contoh /api/user. jangan seperti "api/user". sehingga jika tanpa slash maka muncul error 404
