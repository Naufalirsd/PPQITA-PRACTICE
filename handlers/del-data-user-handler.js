const { removeData, isIdExist } = require("../gateways/memory-storage-gateway");

const delDataUserHandler = (req, res) => {
    if (!req.body || !req.body.id) {
        res.status(400);
        return res.send({ error: true, message: "Harap memasukkan id" });
    }

    const id = req.body.id;

    if (id <= 0 || id >= 1000) {
        res.status(400);
        return res.send({ error: true, message: "Id harus antara 0 - 1000" });
    }

    if (!isIdExist(id)) {
        res.status(400);
        return res.send({ error: true, message: "Id tidak ditemukan" });
    }

    removeData(id);

    res.send({ error: false, message: "Succes" });
};

module.exports = { delDataUserHandler };
