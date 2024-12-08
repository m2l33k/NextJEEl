import React, { useState, useEffect } from 'react';
import '../styles/new.css';

const News = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    'https://newsapi.org/v2/everything?q=education&apiKey=67b2b81feb1d4249a0d813b9d9e7ea61'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNews(data.articles || []);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="news">
            <h2>Latest Education News</h2>
            <div className="news-container">
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <div key={index} className="news-card">
                            {item.urlToImage && (
                                <img
                                    src={item.urlToImage}
                                    alt={item.title}
                                    className="news-image"
                                />
                            )}
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Loading news...</p>
                )}
            </div>
        </div>
    );
};

export default News;
