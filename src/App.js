import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import News from './pages/News';
import Books from './pages/Books';
import Courses from './pages/Courses';
import Scholarships from './pages/Scholarships';
import Profile from './pages/Profile';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Quiz from './pages/Quiz';
import BookDescription from './pages/BookDescription';

import ForgotPassword from './components/Auth/ForgotPassword';
import Scan from './pages/Scan';

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/book/:id" element={<BookDescription />} /> {/* Dynamically pass id */}
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/scholarships" element={<Scholarships />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/scan" element={<Scan />} /> 
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/scan" element={<Scan />} /> 
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
