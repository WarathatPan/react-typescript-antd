import axios from 'axios'
import config from 'config'

// axios.defaults.baseURL = config.service.BASE_URL; //BASE URL

axios.interceptors.request.use((axios_config: any) => {
    return axios_config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

export default axios
