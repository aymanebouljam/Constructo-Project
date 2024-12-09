import React, { useState } from 'react';
import axios from 'axios';


const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetRequest = async () => {
        setMessage('');
        setError('');

        try {
            const response = await axios.post('/api/send-reset-email', {
                email: email,
            });

            if (response.status === 200) {
                setMessage('Password reset email sent! Check your inbox.');
            }
        } catch (err) {
            setError('Failed to send password reset email. Please try again.');
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Your Password</h2>
            <div>
                <label>Email Address:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={handleResetRequest}>Send Reset Email</button>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default ResetPassword;
