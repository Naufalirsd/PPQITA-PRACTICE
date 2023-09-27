const {
    createData,
    addObj,
    findData,
    updateData,
    deleteData,
    findByname,
    updateAllData,
    checkId,
} = require("./CrudObject");

describe("test Crud Objects", () => {
    test("1. when create new object should success", () => {
        let bank = [];
        let result = createData(bank, { id: 1, name: "samsul" });

        // menampilkan seluruh data
        expect(result).toEqual([{ id: 1, name: "samsul" }]);
    });

    test("2. when add new object should success", () => {
        let bank = [{ id: 1, name: "samsul" }];
        let result = addObj(bank, { id: 2, name: "bambang" });

        // menampilkan seluruh data
        expect(result).toEqual([
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ]);
    });

    test("3. when find a object should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];
        let result = findData(bank, 2); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual({ id: 2, name: "bambang" });
    });

    test("4. when update name should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];

        // mengubah ID 1 dengan nama Arifin
        // menggunakan objectArray.findByIdx((value)=>value.id === id)
        let result = updateData(bank, 1, "arifin");
        expect(result).toEqual([
            { id: 1, name: "arifin" },
            { id: 2, name: "bambang" },
        ]);
    });

    test("5. when delete data should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];

        // menghapus ID 2
        // menggunakan objectArray.findIndex((value)=>value.id == id)
        let result = deleteData(bank, 1);
        expect(result).toEqual([{ id: 2, name: "bambang" }]);
    });

    test("6. when find a object by name should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];
        let result = findByname(bank, "samsul"); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual({ id: 1, name: "samsul" });
    });

    test("7. when update name should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];

        let result = updateAllData(bank, 1, { name: "arifin" });
        expect(result).toEqual([
            { id: 1, name: "arifin", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ]);
    });

    test("8. when update name & age should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];

        let result = updateAllData(bank, 1, { name: "arifin", age: 20 });
        expect(result).toEqual([
            { id: 1, name: "arifin", age: 20 },
            { id: 2, name: "bambang", age: 15 },
        ]);
    });

    test("8. when update name & age should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19, email: "samsul@test.com" },
            { id: 2, name: "bambang", age: 15, email: "bambang@test.com" },
        ];

        let result = updateAllData(bank, 1, { name: "arifin", age: 20 });
        expect(result).toEqual([
            { id: 1, name: "arifin", age: 20, email: "samsul@test.com" },
            { id: 2, name: "bambang", age: 15, email: "bambang@test.com" },
        ]);
    });

    test("10. when update name with id string should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];

        let result = updateAllData(bank, "1", { name: "arifin" });
        expect(result).toEqual([
            { id: 1, name: "arifin", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ]);
    });

    test("11. when find id is founded should delete", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];

        let result = checkId(bank, 1);
        expect(result).toEqual(true);
    });

    test("12. when find id isn't founded should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];

        let result = checkId(bank, 4);
        expect(result).toEqual(false);
    });
});
