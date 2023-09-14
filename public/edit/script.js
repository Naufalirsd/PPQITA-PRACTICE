window.onload = () => {
    // masukkan code disini
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        // mengambil data
        const name = document.getElementById('name').value
        const age = document.getElementById('age').value
        const id = document.getElementById("id").value;

        const apiURL = 'http://localhost:3001/api/user'

        try {
            const res = await fetch(apiURL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id, age, name})
            })    

        if(res.status !== 200) {
            alert('Cek kondisi anda atau cek data yang telah dimasukkan')
            return;
        }
        
        const resData = await res.json();

        if (resData.error) {
            alert('Cek data anda yang telah dimasukkan')
            return;
        }

        alert(resData.message)

        window.open('/', '_self')

        } catch(e) {
            alert('ada kesalahan, harap hubungi team developer')
            console.log(e)
        }
        
    })
};
