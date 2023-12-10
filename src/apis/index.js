import axios from 'axios';

const API = axios.create({ baseURL: 'https://accredian-backend-61jo.onrender.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
});

export const login = (authData) => API.post('/login', authData);
export const signup = (authData) => API.post('/signup', authData);
