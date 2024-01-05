import axios from 'axios';

export const BASE_URL_API = "https://api.github.com/users/";

const instance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;


