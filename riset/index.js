const { MongoClient } = require("mongodb");

const { insertMany, insertOne } = require("./oprations/ExampleInsert");
const {
    findMany,
    findOne,
    findOneById,
    findOneWithQuerySpecific,
} = require("./oprations/ExampleFind");
const { deleteById } = require("./oprations/ExampleDelete");
const { updateById } = require("./oprations/ExampleUpdate");
async function run() {
    const url = "mongodb+srv://ppqita:santri@ppqitadb.9ybiiar.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();
    const dbName = "testing";
    const collectionName = "users";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // await insertMany(collection);
    // await insertOne(collection);

    // const dataRes = await findMany(collection);
    // console.log(dataRes)

    // TEST
    let dataRes = await findMany(collection);
    // console.log('dataRes:', dataRes);

    for (const data of dataRes) {
        await deleteById(collection, data.id);
    }

    let dataRes2 = await findMany(collection);
    // console.log('dataRes2:', dataRes2);


    let myData = [
        {
            id: 1,
            name: "regi",
            age: 17,
        },
        {
            id: 2,
            name: "irsyad",
            age: 18,
        },
        {
            id: 3,
            name: "geri",
            age: 19,
        },
    ];

    let dataRes3 = await insertMany(collection, myData);
    let dataRes4 = await updateById(collection, 2, { name: "nopal" });
    let dataRes5 = await deleteById(collection, 3);
    let dataRes6 = await findMany(collection);
    console.log(dataRes6);

    await client.close();
}

run().catch(console.dir);
