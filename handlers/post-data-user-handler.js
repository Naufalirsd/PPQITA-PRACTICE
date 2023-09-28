const {
    showAllData,
    savingData,
} = require("../gateways/mongodb-gateway");
const { nameValidation, ageValid } = require("../Latihan_Jest/validation/validation");

const postDataUserHandler = async (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400);
            return res.send({
                error: true,
                message: "tidak memiliki parameter nama",
            });
        }

        if (!req.body.age) {
            res.status(400);
            return res.send({
                error: true,
                message: "tidak memiliki parameter umur",
            });
        }

        let { name, age } = req.body;

        // Mengambil data nama
        let realNameRes = nameValidation(name);
        let realAgeRes = ageValid(age);

        if (realNameRes.error) {
            res.status(400);
            return res.send(realNameRes);
        }

        if (realAgeRes.error) {
            res.status(400);
            return res.send(realAgeRes);
        }

        await savingData(realNameRes.data, realAgeRes.data); // simpan data di memori (memoriGateway)
        res.send({ data: showAllData() });    
    } catch (err) {
        res.send({ error: true, message: error.message });
    }
};

module.exports = { postDataUserHandler };
