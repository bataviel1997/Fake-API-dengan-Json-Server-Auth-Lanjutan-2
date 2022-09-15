import axios from 'axios';
const app = document.getElementById('app');
// handle deleted
window.handle_delete = (id) => {
  axios.delete('https://vitejs-vite-ooczrz--3000.local.webcontainer.io/siswa'+id)
    .then((res) => {
      if (res.status == 200) {
        alert('Delete Data');
        window.location.reload();
      }
    });
};

// handle edit

window.handle_edit = (data) => {
  app.innerHTML += `
      <div class='modal'>
        <form>
          <div>
            <label for='nama_lengkap'>nama lengkap</label>
            <input type='text' value='${data.nama_lengkap}' id='nama_lengkap' />
          </div>

          <div>
            <label for='usia'>usia</label>
            <input type='text' value='${data.usia}' id='usia' />
          </div>
        </form>
      </div>`;
};

export default function Data_siswa() {
  axios
    .get('https://vitejs-vite-ooczrz--3000.local.webcontainer.io/siswa')
    .then((res) => {
      app.innerHTML += `<h1>Data Siswa</h1>`;
      res.data.map((e) => {
        app.innerHTML += `
      <div class= "card">
      <h3> ${e.nama_lengkap}</h3>
      <p>usia : ${e.usia}</p>
      <button onclick="handle_delete(${e.id})">Delete</button>
      <button onclick="handle_edit(${JSON.stringify(e)})">Update</button>

      </div>
      `;
      });
      app.innerHTML += `<a href="/">Kembali</a>`;
    });
}
