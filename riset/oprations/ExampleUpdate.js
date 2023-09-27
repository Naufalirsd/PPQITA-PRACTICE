const updateById = async (collection, id, newObj = { name: "arif" }) => {
    // bagaimana mengubah daftar siswa dengan id 3 yg memiliki nama bambang diubah menjadi nama arif
    try {
        const dataRes = collection.updateOne({ id }, { $set: newObj });
        return dataRes;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { updateById };
