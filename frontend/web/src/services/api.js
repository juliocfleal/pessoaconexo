import axios from 'axios';


const TOKEN_ = localStorage.getItem('token');
axios.defaults.headers['Authorization'] = TOKEN_ ;

const api = axios.create({
  baseURL: 'http://localhost:8080',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'}
});



   

export default api;