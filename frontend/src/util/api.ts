import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'
    ? "https://imagepasswordgenerator-1.onrender.com"
    : "http://localhost:5000";

const token = localStorage.getItem('accessToken') || '';

const Api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default Api;
