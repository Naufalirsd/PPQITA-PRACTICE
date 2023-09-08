const { editDataName } = require("../gateaways/memory-storage-gateway");

const putDataUserHandler = (req, res) => {

    let name = req.body.name
    let id = req.body.id
    editDataName(id, name)

    res.send({ error: false, message: "Success" });
};

module.exports = { putDataUserHandler };
