import axios from 'axios';

window.handleSubmit = function (event) {
  event.preventDefault();
  //1 menangkap nilai input e.target.id.value
  let nama_lengkap = event.target.nama_lengkap.value;
  let usia = event.target.usia.value;
  let alamat = event.target.alamat.value;
  let wali_murid = event.target.wali_murid.value;
  //2 post(endpoit link/nama table, objek{})
  axios
    .post('https://vitejs-vite-jl3fpt--3000.local.webcontainer.io/siswa', {
      //3 kiri properti : kanan value
      nama_lengkap: nama_lengkap,
      usia: usia,
      alamat: alamat,
      wali_murid: wali_murid,
    })
    // 4 memanggil respon
    .then((res) => {
      alert('Registrasi Berhasil');
    })
    // 5 respon error
    .catch((err) => {
      alert(err.response.data);
    });

  // reset
  event.target.nama_langkap.value = '';
  event.target.usia.value = '';
  event.target.alamat.value = '';
  event.target.wali_murid.value = '';
};

export default function Home() {
  return `
    <div>
      <h1> Pendaftaran Siswa Baru </h1>
        <form onsubmit="handleSubmit(event)">
          <div>
            <label for="nama_lengkap">Nama Lengkap </label>
            <input type="text" id="nama_lengkap" required />
          </div>

          <div>
            <label for="usia">Masukan Usia </label>
            <input type="number" id="usia" required />
          </div>

          <div>
            <label for="alamat">Masukan alamat </label>
          <textarea type="text" id="alamat" required></textarea>
          </div>

          <div>
            <label for="wali_murid">Wali Murid</label>
            <input type="text" id="wali_murid" required />
          </div>

          <button type="submit"> Save</button>
        </form>

        <a href = "/data_siswa">Data Siswa</a>
    </div>  
  `;
}
