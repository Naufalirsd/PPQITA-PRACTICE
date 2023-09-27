const findMany = async (collection) => {
    try {
        const dataRes = await collection.find().toArray();
        return dataRes;
    } catch (err) {
        console.error(
            `Something went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

const findOne = async (collection) => {
    try {
        const dataRes = await collection.findOne();
        return dataRes;
    } catch (err) {
        console.error(
            `Something went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

const findOneById = async (collection, id) => {
    try {
        const dataRes = await collection.findOne({ id }); //id:id.
        return dataRes;
    } catch (err) {
        console.error(
            `Something went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

const findOneWithQuerySpecific = async (collection) => {
    try {
        const dataRes = await collection.find({ age: { $gt: 16 } });
        return dataRes;
    } catch (err) {
        console.error(
            `Something went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

module.exports = { findMany, findOne, findOneById, findOneWithQuerySpecific };
