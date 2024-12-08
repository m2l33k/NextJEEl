import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors if needed
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiClient;
