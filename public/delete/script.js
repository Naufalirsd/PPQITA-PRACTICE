window.onload = () => {
    const form = document.getElementById("dataForm");

    form.addEventListener("submit", async () => {
        const id = document.getElementById("id").value;
        const apiUrl = "http://localhost:3001/api/user";
        const body = JSON.stringify({ id });

        try {
            const res = await fetch(apiUrl, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body,
            });

            const resData = await res.json();
            if (resData.error) {
                alert(resData.message);
                return;
            }
            alert("Berhasil dihapus");
            window.open("/", "_self");
        } catch (e) {
            alert("Terjadi kesalahan");
        }
    });
};
