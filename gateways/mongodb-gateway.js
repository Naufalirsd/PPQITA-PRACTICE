const { MongoClient } = require('mongodb');

const { insertOne } = require('../riset/oprations/ExampleInsert');
const {
  findMany,
  isIdExist,
} = require('../riset/oprations/ExampleFind');
const { updateById } = require('../riset/oprations/ExampleUpdate');
const { deleteById } = require('../riset/oprations/ExampleDelete');

// pengganti memoryData
let collection;


const connectionDB = async () => {
    const url = 'mongodb+srv://ppqita:santri@ppqitadb.9ybiiar.mongodb.net/'

    const client = new MongoClient(uri);

    await client.connect();

    const dbName = 'development';
    const collectionName = 'users';

    const database = client.db(dbName);
    collection = database.collection(collectionName);
}

const savingData = async (name, age) => {
    try {
        let id = Math.ceil(Math.random() * 1000);
        await insertOne(collection, {id, name, age})
    } catch (err) {
        console.log('Error in saving data ', err)
    }
    // dataMemory = createData(dataMemory, {id, name, age});
};

const showAllData = async () => {
    let data = [];
    try {
        data = await findMany(Collection);
    } catch (err) {
        console.log('Error in show data all ', err)
    } finally {
        return data;
    }
    return dataMemory;
};

const editNamaData = (id, name) => {
    return dataMemory;
}

const getDataByName = (name) => {
    // return findByname(dataMemory, name);
};

const editDataName = (id, name) => {
    // if (typeof id === 'string') {
    //     id = parseInt(id)
    // };
    // dataMemory = updateData(dataMemory, id, name);
    return dataMemory;
};

const editNamaUmurData = async (id, name, age) => {
    if (typeof id === 'string') {
        id = parseInt(id)
    }

    // dataMemory = updateAllData(dataMemory, id, { name, age });
    await updateById( collection, id, { name, age } )
    const data = await findMany(collection);

    return dataMemory;
};

const isIdExist = async (id) => {
    if (typeof id === 'string') {
        id = parseInt(id);
    }

    return await checkId(Collection, id);
};

const removeData = async (id) => {
    if(typeof id === 'string') {
        id = parseInt(id)
    }

    await deleteById(collection, id);
    const data = await findMany(collection);

    return data;
};

module.exports = {
    savingData,
    showAllData,
    editDataName,
    removeData,
    getDataByName,
    editNamaUmurData,
    isIdExist,
};
