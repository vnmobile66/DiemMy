import axios from "axios";
import { apiURL } from "./config";


const axiosInstance =axios.create({
    baseURL: apiURL,
    timeout:1000,
    headers:{
        "Content-Type":"application/json"
    }
});
export default axiosInstance;