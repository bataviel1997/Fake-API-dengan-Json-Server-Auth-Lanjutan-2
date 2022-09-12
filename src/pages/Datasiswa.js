import axios from "axios"
//  1 function tidak auto run
async function get_data_sisiwa(){
// 2 menangkap data
  let all_component = []
  let get_data = await axios.get('https://vitejs-vite-jl3fpt--3000.local.webcontainer.io/siswa')
  // 3 mendapatkan dan memecah objek data
  let store_component =  await get_data.data.forEach((e)=>{
      all_component.push(`
        <div class="card">
          <p>${e.nama_lengkap}</p> 
          <p>${e.usia}</p> 
        </div>
      `)
  })
    return all_component;

}

export default function Data_siswa(){
  return `
    <div>
      <h1> Daftar Siswa Jvalley </h1>

      <div id=="card_container">
      ${get_data_sisiwa().then(com =>{
        return com.join('')
      })}
      </div>

    </div>  
  `
}