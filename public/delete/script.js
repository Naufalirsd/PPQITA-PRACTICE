window.onload = () => {
    // masukkan code disini
    // Cari element form
    const form = document.getElementById('dataForm')

    form.addEventListener("submit", async () => {
        // Cari id-nya
        const id = document.getElementById("id").value;

        const apiUrl = "http://localhost:3001/api/user";

        // Siapkan data yang akan dikirim
        const body = JSON.stringify({ id });

        // Siapkan event listener jika tombol submit di click
        try {
            const res = await fetch(apiUrl, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", 
            },
            body,
        });

        const resData = await res.json();

        alert('berhasil dihapus')
        window.open('../', '_self')

        } catch (error) {
            alert("Terjadi kesalahan, silahkan hubungi team developer");
            console.log('error:', error);
        }
    });

};
