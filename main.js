import Home from './src/pages/Home';
import './style.css';
import Data_siswa from './src/pages/Datasiswa';

const app = document.getElementById('app');
const page = document.location.pathname;
// konidisi
switch (page) {
  case '/':
    app.innerHTML = Home();
    break;

  case '/data_siswa':
    Data_siswa();
    break;

  default:
    app.innerHTML = `<h1>error</h1>`;
}
