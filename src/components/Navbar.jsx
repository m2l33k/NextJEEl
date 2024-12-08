import React from 'react';
import '../styles/navbar.css'; 

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">
                    <h1 className="text-primary">IEEE WIE <span className="text-secondary">SESAME SAG</span></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/books">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/scholarships">Scholarships</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/scan">Scan</a>
                        </li>
                    </ul>
                    <div className="navbar-actions">
                        <a href="/signin" className="btn btn-light btn-sm">Sign In</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
