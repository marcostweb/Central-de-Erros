import axios from 'axios'
import {getToken} from './authenticated'

const api = axios.create({
    // baseURL: 'http://demo8412297.mockable.io/',
    baseURL: 'https://centralerrosdev.herokuapp.com/',

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

api.interceptors.request.use(async config => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api