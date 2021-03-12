import axios from 'axios';
export function request(config) {
  const creat = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5/',
    timeout: 5000,
  });
  creat.interceptors.response.use(data => {
    return data;
  });
  return creat(config);
}