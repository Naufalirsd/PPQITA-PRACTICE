const { MongoClient } = require("mongodb");

const { insertMany, insertOne } = require("./oprations/ExampleInsert");
const {
    findMany,
    findOne,
    findOneById,
    isIdExist,
    findOneWithQuerySpecific,
} = require("./oprations/ExampleFind");

const { deleteById } = require("./oprations/ExampleDelete");

const { updateById } = require("./oprations/ExampleUpdate");


async function run() {
    const url = "mongodb+srv://ppqita:santri@ppqitadb.9ybiiar.mongodb.net/";

    const { collection, client } = await connectionDB(url, 'testing', 'users');

    await cleanDB(collection)

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

    const dataRes3 = await insertMany(collection, myData);

    // await isIdExist(collection, 2)

    const isIdExisted = await isIdExist(collection, 4)
    console.log('isIdExited: ', isIdExisted)

    // let dataRes3 = await insertMany(collection, myData);
    // let dataRes4 = await updateById(collection, 2, { name: "nopal" });
    // let dataRes5 = await deleteById(collection, 3);
    // let dataRes6 = await findMany(collection);
    // console.log(dataRes6);

    await client.close();
}

 const cleanDB = async (collection) => {
     try {
         let dataRes = await findMany(collection);

         for (const data of dataRes) {
             await deleteById(collection, data.id);
         }
     } catch (err) {
         console.log("Error clean DB: ", err);
     }
 };

const connectionDB = async(url, dbName, collectionName) => {
    try {
        const client = new MongoClient(url);

        await client.connect();

        const database = client.db(dbName);

        const collection = database.collection(collectionName)

        return { collection, client }

    } catch (err) {
        console.log('Error connection DB ', err)
    }
};

run().catch(console.dir);
