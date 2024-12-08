import axios from '../utils/apiClient';

const scholarshipsService = {
    getAll: async () => {
        const response = await axios.get('/scholarships');
        return response.data;
    },
    getById: async (id) => {
        const response = await axios.get(`/scholarships/${id}`);
        return response.data;
    },
};

export default scholarshipsService;
