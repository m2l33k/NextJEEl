import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../styles/main.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        // Add your sign-in logic here
    };

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Redirect to the signup page
    };

    return (
        <div className="signin-page">
            <div className="background-text">
                <h1>Learn</h1>
                <h1>Educate</h1>
                <h1>Inspire</h1>
            </div>
            <div className="signin-card">
                <img
                    src="https://pngtree.com/freepng/fashion-boy-avatar_8855187.html"
                    alt="User Avatar"
                    className="user-avatar"
                />
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>E m a i l</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>P a s s w o r d</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="primary-button">
                        S i g n I n
                    </button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? </p>
                    <button onClick={handleSignUpRedirect} className="secondary-button">
                        Create an Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
