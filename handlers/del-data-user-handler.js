const {removeData} = require("../gateaways/memory-storage-gateway")

const delDataUserHandler = (req, res) => {
    const id = req.body.id

    removeData(id);

    res.send({error:false, message:"Success"});
};

module.exports = { delDataUserHandler };
