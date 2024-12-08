import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../../styles/main.css'; // Assuming you have a global CSS file

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation logic
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // You would replace this with your actual sign-up logic
        console.log({ email, password });

        // Redirecting to the Quiz page after successful sign-up
        navigate('/quiz'); // Replace '/quiz' with the actual route of your quiz page
    };

    return (
        <div className="signup-page">
            <div className="background-text">
                <h1>Learn</h1>
                <h1>Educate</h1>
                <h1>Inspire</h1>
            </div>
            <div className="signup-card">
                <img
                    src="https://pngtree.com/freepng/fashion-boy-avatar_8855187.html"
                    alt="User Avatar"
                    className="user-avatar"
                />
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="primary-button">
                        Sign Up
                    </button>
                </form>
                <div className="signin-link">
                    <p>Already have an account?</p>
                    <button onClick={() => navigate('/signin')} className="secondary-button">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
