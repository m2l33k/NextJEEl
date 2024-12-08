import React, { useState } from 'react';
import axios from 'axios';
import '../styles/scan.css';

const Scan = () => {
    const [file, setFile] = useState(null);
    const [extractedText, setExtractedText] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await axios.post('http://localhost:5000/upload-pdf', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setExtractedText(response.data.text);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="scan-container">
            <h1>Upload PDF to Extract Text</h1>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
            <div className="pdf-text-display">
                <p>{extractedText}</p>
            </div>
        </div>
    );
};

export default Scan;
