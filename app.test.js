const request = require("supertest");
const app = require("./app");

describe.skip("Test in app", () => {
    test("When get root should succes", async () => {
        let response = await request(app).get("/");
        expect(response.status).toBe(200); //=== / '5' === '5' => false
        expect(response.body).toEqual({ data: [] }); //=== / '5' == '5' => true
    }, 5000);

    test("When post root should succes", async () => {
        const data = { name: "Naufal", age: 16 };
        let response = await request(app).post("/").send(data);
        expect(response.status).toBe(200);
        expect(response.body.data[0].name).toEqual("Naufal");
        expect(response.body.data[0].age).toEqual(16);
        expect(typeof response.body.data[0].id).toBe("number");
    }, 5000);

    test("When test flow should succes", async () => {
        // Insert data
        const data1 = { name: "Naufal", age: 16 };
        const data2 = { name: "Irsyad", age: 20 };
        const data3 = { name: "Ihsan", age: 50 };

        await request(app).post("/").send(data1);
        await request(app).post("/").send(data2);
        await request(app).post("/").send(data3);

        // Ambil id (random)
        let response = await request(app).get("/");
        let id1 = response.body.data[0].id;
        let id2 = response.body.data[1].id;
        let id3 = response.body.data[2].id;

        // Ubah data
        const newData = { id: id3, name: "Klaten" };
        await request(app).put("/").send(newData);

        // Hapus data
        await request(app).delete("/").send({ id: id2 });

        // Ambil data terbaru
        let response2 = await request(app).get("/");

        // Cocok
        expect(response2.body).toEqual({
            data: [
                { id: id1, name: "Naufal", age: 16 },
                { id: id3, name: "Klaten" },
            ],
        });
    });

    afterAll(() => {
        app.close();
    });
});
