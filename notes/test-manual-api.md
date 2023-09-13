# Noted

-   install extension `Thunder Client`
-   buat collection dengan nama `backend-ppqita`
-   pada titik tiga di collection `backend-ppqita`, pilih `New Request` beri nama `root-get`, url adalah `localhost:3000`
-   jalankan server dengan `npm run start`
-   jangan lupa simpan dengan `ctrl + s`
-   jalankan dengan klik tombol `send`

## test secara manual dengan terminal

-   untuk get
    `curl -X GET http://localhost:3000`
-   untuk update
    `curl -X PUT http://localhost:3000`
-   untuk tambah data
    `curl -X POST -H 'Content-Type: application/json' -d '{"name": " Naufal"}' http://localhost:3000`
-   untuk delete data
    `curl -X DELETE http://localhost:3000`

## test otomatis menggunakan supertest

-   install supertest
    `npm i -D supertest`
-   import supertest
    `const request = require('supertest');`
-   import aplikasi express
    `const app = require('./app')`
-   panggil aplikasi di supertest ( contoh implementasinya )
    `const response = await request(app).get('/');`
-   test status
    `expect(response.status).toBe(200);`
-   test body
    `expect(response.body).toEqual({ message: "Hello, World" });`
-   sendangkan untuk contoh post

...

const data = { message: 'Test Message'};
const response = await request(app)
.post('/api/post')
.send(data);
...

-   Jangan lupa menutup server setelah selesai proses

...
afterAll(() => {
app.close(); // Menutup server setelah semua test selesai
});
