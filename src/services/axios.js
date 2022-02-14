import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const cryptoAPI = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})