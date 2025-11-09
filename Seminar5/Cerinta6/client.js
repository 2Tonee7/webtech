
const apiUrl = 'http://localhost:8000/api/';
async function sendData() {
    let name = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;

    if (!name || !age) {
        return;
    }

    try {
        const contactData = {
            name: name,
            age: parseInt(age) 
        };
        const response = await axios.post(apiUrl + 'postList', contactData);
        console.log('Adaugat:', response.data);
        loadInitialList();

    } catch (err) {
        console.error('Eroare la trimiterea datelor:', err);
    }
}

async function getById() {
    let id = document.getElementById('inputId').value;

    if (!id) {
        return;
    }

    try {
        const { data } = await axios.get(apiUrl + "getById/" + id);
        let div = document.getElementById('singleData');
        div.innerHTML = `<p>Id: ${data.id} | Nume: ${data.name} | Varsta: ${data.age}</p>`;
    } catch (err) {
        console.error('Eroare la getById:', err);
        document.getElementById('singleData').innerHTML = `<p>Resursa nu a fost gasita (ID: ${id})</p>`;
    }
}
async function loadInitialList() {
    try {
        const { data } = await axios.get(apiUrl + 'getList');
        const tableDiv = document.getElementById('tableData');
        let html = '<h3>Lista curenta:</h3><table border="1">';
        html += '<tr><th>ID</th><th>Nume</th><th>Varsta</th></tr>';
        for (const item of data) {
            html += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`;
        }
        html += '</table>';
        tableDiv.innerHTML = html;
    } catch (err) {
        console.error('Eroare la incarcare lista:', err);
        document.getElementById('tableData').innerHTML = '<p>Erore lista incarcare la server.</p>';
    }
}
window.onload = loadInitialList