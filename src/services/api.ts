import axios, {AxiosResponse, AxiosError} from 'axios';

const BASE_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
const TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    responseType: 'json',
  });

  const onSuccess = (response: AxiosResponse) => response;
  const onFail = (error: AxiosError) => Promise.reject(error);

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
