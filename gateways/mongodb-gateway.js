// const { createData, updateData, deleteData, findByname, updateAllData, checkId } = require("../crud/CrudObject");

// let dataMemory = [];

const savingData = (name, age) => {
    let id = Math.ceil(Math.random() * 1000);
    // dataMemory = createData(dataMemory, {id, name, age});
};

const showAllData = () => {
    return dataMemory;
};

const getDataByName = (name) => {
    return findByname(dataMemory, name);
};

const editDataName = (id, name) => {
    // if (typeof id === 'string') {
    //     id = parseInt(id)
    // };
    // dataMemory = updateData(dataMemory, id, name);
    return dataMemory;
};

const removeData = (id) => {
    // if (typeof id === 'string') {
    //     id = parseInt(id)
    // };
    // dataMemory = deleteData(dataMemory, id);
    return dataMemory;
};

const editNamaUmurData = (id, name, age) => {
    dataMemory = updateAllData(dataMemory, id, { name, age });
    return dataMemory;
};

const isIdExist = (id) => {
    return checkId(dataMemory, id);
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
