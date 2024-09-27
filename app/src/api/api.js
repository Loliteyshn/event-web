import axios from "axios";

export const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:3000/api/',
});