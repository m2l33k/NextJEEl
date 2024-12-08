import axios from '../utils/apiClient';

const authService = {
    signIn: async (credentials) => {
        const response = await axios.post('/auth/signin', credentials);
        return response.data;
    },
    signUp: async (userDetails) => {
        const response = await axios.post('/auth/signup', userDetails);
        return response.data;
    },
    forgotPassword: async (email) => {
        const response = await axios.post('/auth/forgot-password', { email });
        return response.data;
    },
};

export default authService;
