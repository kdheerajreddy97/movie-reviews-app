import axios from 'axios';

const api = axios.create({
    baseURL: 'https://c23e-38-49-92-99.ngrok-free.app', // Use the ngrok public URL
    headers: { 'ngrok-skip-browser-warning': 'true' }
});

export default api;
