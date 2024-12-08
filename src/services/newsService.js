import axios from '../utils/apiClient';

const newsService = {
    getAll: async () => {
        const response = await axios.get('/news');
        return response.data;
    },
    getById: async (id) => {
        const response = await axios.get(`/news/${id}`);
        return response.data;
    },
};

export default newsService;
