import axios from "axios";

/**
 * 공통 axios 인스턴스
 * @type {axios.AxiosInstance}
 */
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
});

export default api;