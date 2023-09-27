window.onload = () => {
    const form = document.getElementById("dataForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Mengambil data
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const id = document.getElementById("id").value;

        // Mengirim data
        const apiUrl = "http://localhost:3001/api/user";

        try {
            const res = await fetch(apiUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name, age }),
            });

            const resData = await res.json();

            if (resData.error) {
                alert("Cek data yang dimasukkan");
                return;
            }
            alert(resData.message);
            window.open("/", "_self");
        } catch (e) {}
    });
};
