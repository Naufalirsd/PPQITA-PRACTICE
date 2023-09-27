const insertMany = async (collection, users) => {
    try {
        const insertManyResult = await collection.insertMany(users);
        console.log(
            `${insertManyResult.insertedCount} documents succesfully inserted.\n`
        );
    } catch (err) {
        console.error(
            `Somethin went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

const insertOne = async (collection, users) => {
    try {
        const insertManyResult = await collection.insertOne(users);
        console.log(
            `${insertManyResult.insertedCount} documents succesfully inserted.\n`
        );
    } catch (err) {
        console.error(
            `Somethin went wrong trying to insert the new documents: ${err}\n`
        );
    }
};

module.exports = { insertMany, insertOne };
