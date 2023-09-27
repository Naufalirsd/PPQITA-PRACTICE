window.onload = () => {
    let elmListData = document.getElementById("list-data");
    const apiUrl = "http://localhost:3001/api/user";

    fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => {
            // validasi data apakah kosong
            if (!data || data.error || data.length == 0) {
                elmListData.innerHTML = "Data kosong";
                return;
            }

            // Menyusun dari data array menjadi element html;
            let stringElements = data.data
                .map((d) => {
                    return `<tr>
        <td class="border border-slate-600">${d.id}</td>
        <td class="border border-slate-600">${d.name}</td>
        <td class="border border-slate-600">${d.age}</td>
      </tr>`;
                })
                .join("");

            // Tampilkan
            elmListData.innerHTML = stringElements;
        })

        .catch((error) => {
            console.error("Terjadi kesalahan:", error);
            alert("Terjadi kesalahan saat mengirim data ke API");
        });
};
