import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../styles/books.css';
import booksData from '../Books.json'; // Import the books data

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setBooks(booksData);
        setFilteredBooks(booksData); // Initially show all books
    }, []);

    // Handle filter change for book section
    const handleSectionChange = (e) => {
        const section = e.target.value;
        setSelectedSection(section);

        if (section === '') {
            setFilteredBooks(books); // If no section is selected, show all books
        } else {
            const filtered = books.filter((book) => book.section === section);
            setFilteredBooks(filtered);
        }
    };

    // Navigate to book description page
    const handleBookClick = (book) => {
        // Navigate to the book description page with the book's id
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="books">
            <h2 className="books-title">Books</h2>

            {/* Filter Section */}
            <div className="filter-section">
                <label htmlFor="section-select" className="filter-label">Select Section:</label>
                <select
                    id="section-select"
                    className="filter-dropdown"
                    value={selectedSection}
                    onChange={handleSectionChange}
                >
                    <option value="">All Sections</option>
                    <option value="bac math">Bac Math</option>
                    <option value="bac science">Bac Science</option>
                    <option value="bac info">Bac Info</option>
                    <option value="bac technique">Bac Technique</option>
                    <option value="1er année">1er Année</option>
                    <option value="2eme année">2eme Année</option>
                    <option value="3eme année">3eme Année</option>
                </select>
            </div>

            {/* Display filtered books */}
            <div className="book-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => {
                        // Use image URL directly from book's data
                        const imageSrc = book.className || '/fallback-image.jpg'; // Fallback image if no URL is provided

                        return (
                            <div
                                key={book.id}
                                className="book-item"
                                onClick={() => handleBookClick(book)} // Handle book click
                            >
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">By {book.author}</p>
                                <p className="book-section">Section: {book.section}</p>
                                <img
                                    src={imageSrc}
                                    alt={book.title}
                                    className="book-image"
                                />
                            </div>
                        );
                    })
                ) : (
                    <p className="no-books-found">No books found for this section.</p>
                )}
            </div>
        </div>
    );
};

export default Books;
