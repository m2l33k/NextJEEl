import React from 'react';
import '../styles/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {new Date().getFullYear()} My Platform. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
