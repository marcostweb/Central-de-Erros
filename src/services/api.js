import axios from 'axios';

const api = axios.create({
    baseURL: 'http://demo8412297.mockable.io/'
})

export default api;