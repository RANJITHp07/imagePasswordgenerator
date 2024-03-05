import axios from "axios";


const token = localStorage.getItem('accessToken') as string;


const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Authorization: token || ''
    }
});

export default Api;
