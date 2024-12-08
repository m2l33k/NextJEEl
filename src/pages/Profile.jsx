import React, { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save updated user profile
        console.log('Updated profile:', user);
    };

    return (
        <div className="profile">
            <h2>Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
