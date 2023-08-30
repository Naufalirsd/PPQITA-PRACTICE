const {
    createData,
    readAll,
    readByIdx,
    updateData,
    deleteData,
} = require("./CrudNumbers");

describe("test crud numbers", () => {
    test("when create should succes", () => {
        let bank = [];
        let result = createData(bank, 5);

        expect(result).toEqual([5]);
    });

    test("when readAll should success", () => {
        let bank = [3, 4, 5];
        let result = readAll(bank);

        expect(result).toEqual([3, 4, 5]);
    });

    test("when readByIdx should success", () => {
        let bank = [3, 4, 5];
        let result = readByIdx(bank, 2);
        expect(result).toEqual(5);
    });

    test("when updateData should success", () => {
        let bank = [3, 4, 5];
        let result = updateData(bank, 1, 8);
        expect(result).toEqual([3, 8, 5]);
    });

    test("when delete should success", () => {
        let bank = [2, 3, 4, 5];
        let result = deleteData(bank, 2, 3);
        expect(result).toEqual([2, 3]);
    });
});
