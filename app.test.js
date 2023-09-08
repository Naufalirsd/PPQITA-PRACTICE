const request = require("supertest");
const app = require("./app");

describe("Test in app", () => {
    test("When get root should succes", async () => {
        let response = await request(app).get("/");
        expect(response.status).toBe(200); //=== / '5' === '5' => false
        expect(response.body).toEqual({ data: [] }); //=== / '5' == '5' => true
    }, 5000);

    test("When post root should succes", async () => {
        const data = { name: "naufal", age: 16 };
        let response = await request(app).post("/").send(data);
        expect(response.status).toBe(200);
        expect(response.body.data[0].name).toEqual("naufal");
        expect(response.body.data[0].age).toEqual(16);
        expect(typeof response.body.data[0].id).toBe("number");
    }, 5000);

    test('when test flow should success', async () => {
        const data1 = {name: 'naufal', age: 16};
        const data2 = {name: 'irsyad', age: 16};
        const data3 = { name: 'ihsan', age: 16};

        await request(app).post('/').send(data1);
        await request(app).post('/').send(data2);
        await request(app).post("/").send(data3);

        // ambil id (random)
        let response = await request(app).get('/');

        let id1 = response.body.data[0].id;
        let id2 = response.body.data[1].id;
        let id3 = response.body.data[2].id;

        // ubah data
        const newData = {id: id3, name: 'surakarta'};
        await request(app).put('/').send(newData);

        // hapus data
        await request(app).delete('/').send({id: id2});

        // ambil data terbaru
        let response2 = await request(app).get('/');

        // cocokkan
        expect(response2.body).toEqual({
            data: [
                {id: id1, name: 'naufal', age: 16},
                {id: id3, name: 'surakarta'}
            ]
        })
    })

    afterAll(() => {
        app.close();
    });
});
