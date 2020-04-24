import axios from 'axios';

const api = axios.create({
    baseURL: 'https://59cfa5ad.ngrok.io'
})

export default api;