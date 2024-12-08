import axios from '../utils/apiClient';

const coursesService = {
    getAll: async () => {
        const response = await axios.get('/courses');
        return response.data;
    },
    getById: async (id) => {
        const response = await axios.get(`/courses/${id}`);
        return response.data;
    },
};

export default coursesService;
