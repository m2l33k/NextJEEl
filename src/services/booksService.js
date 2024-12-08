import axios from '../utils/apiClient';

const booksService = {
    getAll: async () => {
        const response = await axios.get('/books');
        return response.data;
    },
    getById: async (id) => {
        const response = await axios.get(`/books/${id}`);
        return response.data;
    },
};

export default booksService;
