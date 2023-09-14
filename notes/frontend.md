# FrontEnd

Bagaimana membuat tampilan frontend

- Buat folder `Public` di root
- Buat tampilan html di dalam Public `index.html`
- Tambahkan di app.js
    `app.use(express.static('public'));` digunakan untuk membaca seluruh folder `public` yang terdapat di `root`
- Untuk root api ubah dari `/` menjadi `/api` lebih spesifik `/api/user`
- Update juga untuk `Thunder Client` dan `Testing` sebelumnya hanya `/` atau `http://localhost:3001` menjadi `/api/user` atau `http://localhost:3001/api/user`

# buat ui untuk Send data

- menggunakan tailwind
  
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

ref: https://tailwindcss.com/docs/installation/play-cdn

# buat Tampilan post dengan mengubah body menjadi

```html
<body class="bg-gray-100 p-4">
  <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h1 class="text-2xl font-semibold mb-4">Formulir Pengiriman Data</h1>
    <form id="dataForm">
      <div class="mb-4">
        <label for="nama" class="block text-gray-600">Nama:</label>
        <input type="text" id="nama" name="nama" class="w-full border rounded-md py-2 px-3"
          placeholder="Masukkan Nama Anda" required>
      </div>
      <div class="mb-4">
        <label for="umur" class="block text-gray-600">Umur:</label>
        <input type="number" id="umur" name="umur" class="w-full border rounded-md py-2 px-3"
          placeholder="Masukkan Umur Anda" required>
      </div>
      <div class="mt-4">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Kirim Data</button>
      </div>
    </form>
  </div>
```
```js
  <script>
    // Menggunakan JavaScript untuk menangani pengiriman data melalui API
    document.getElementById('dataForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const nama = document.getElementById('nama').value;
      const umur = document.getElementById('umur').value;

      // Ganti URL dengan URL API yang sesuai
      const apiUrl = 'http://localhost:3001/api/user';

      // Menggunakan Fetch API untuk mengirim data ke API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',****
        },
        body: JSON.stringify({ nama, umur }),
      })
        .then(response => response.json())
        .then(data => {
          // Manipulasi respons dari API sesuai kebutuhan Anda
          console.log('Respon dari API:', data);
          alert('Data berhasil dikirim ke API.');
        })
        .catch(error => {
          console.error('Terjadi kesalahan:', error);
          alert('Terjadi kesalahan saat mengirim data ke API.');
        });
    });
  </script>
</body>
```