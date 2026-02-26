import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6987364d8bacd1d773eccf28.mockapi.io",
    headers: {
        "Content-Type" : "application/json"
    }
});

export default axiosInstance