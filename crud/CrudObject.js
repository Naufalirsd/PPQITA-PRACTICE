const createData = (bank, data) => {
    bank.push(data);

    return bank;
};

const addObj = (bank, data) => {
    bank.push(data);

    return bank;
};

const findData = (bank, id) => {
    return bank.find((value) => value.id === id);
};
const updateData = (bank, id, value, num) => {
    if (typeof id === "string") {
        id = parseInt(id);
    }
    const index = bank.findIndex((value, num) => value.id || num.id === id);
    bank[index] = { ...bank[index], ...id, name: value, age: num };

    return bank;
};
const deleteData = (bank, id) => {
    const index = bank.findIndex((value) => {
        return value.id === id;
    });

    bank.splice(index, 1);
    return bank;
};

const findByname = (bank, name) => {
    return bank.find((value) => value.name.includes(name))
}

module.exports = { createData, addObj, findData, updateData, deleteData, findByname };
