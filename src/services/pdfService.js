import axios from 'axios';

export const uploadPdf = async (file) => {
    const formData = new FormData();
    formData.append('pdf', file);

    const response = await axios.post('http://localhost:5000/upload-pdf', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data.text;
};
