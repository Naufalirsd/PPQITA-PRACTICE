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
    `curl -X POST -H 'Content-Type: application' -d '{"name":"Naufal"}' http://localhost:3000`
-   untuk delete data
    `curl -X DELETE http://localhost:3000`
