import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../Books.json';
import '../styles/DescriptionBooks.css';

const DescriptionBooks = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const foundBook = booksData.find((b) => b.id === parseInt(id, 10));
        if (foundBook) {
            setBook(foundBook);
        }
    }, [id]);

    const handleDownloadPDF = () => {
        if (book && book.pdfFile) {
            const pdfPath = `/assets/pdf/${book.pdfFile}`; // Path to the PDF in your project
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = `${book.title}.pdf`; // Name of the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('PDF file not available for this book.');
        }
    };

    const handlePlayVoice = () => {
        const speech = new SpeechSynthesisUtterance(
            `${book.title}. Written by ${book.author}. In the section: ${book.section}. Description: ${book.description}`
        );
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    };

    if (!book) {
        return <p className="not-found">Book not found</p>;
    }

    return (
        <div className="book-description-container">
            <div className="book-image">
                <img src={book.className} alt={book.title} />
            </div>
            <div className="book-details">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">
                    <strong>Author:</strong> {book.author}
                </p>
                <p className="book-section">
                    <strong>Section:</strong> {book.section}
                </p>
                <p className="book-description">{book.description}</p>
                <div className="book-actions">
                    <button className="primary-button" onClick={handleDownloadPDF}>
                        Download PDF
                    </button>
                    <button className="secondary-button" onClick={handlePlayVoice}>
                        Play Voice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DescriptionBooks;
