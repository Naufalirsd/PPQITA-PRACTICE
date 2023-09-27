const deleteById = async (collection, value) => {
    const dataRes = collection.deleteOne({ id: value });
    return dataRes;
};

module.exports = { deleteById };
