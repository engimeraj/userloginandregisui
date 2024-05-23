import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"


});
// request Interceptors
axiosInstance.interceptors.request.use(

    config => {
        // Update headers for JSON
        config.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const token = localStorage.getItem('token');

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
    
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// response Inteceptors
axiosInstance.interceptors.response.use(
    response => {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
    },
    error => {
        console.log("meraj",error.response.data.message);
        if (error.response.status === 401) {
            return error.response

        } else if (error.response.status === 400) {
            console.log(" BAD Request !!")
            return Promise.reject(error);
        }
        else if (error.response.status === 404) {
            console.log(" PAGE NOT FOUND !!")
        }
        else if (error.response.status === 500) {
            console.log(" Internat Server error NOtified !!")

        }
    }

);

export default axiosInstance;