import React, { useState } from 'react';
import InputField from './InputField';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError('');
        setSuccess('');

        const registrationData = {
            // fullName,
            username,
            // email,
            password,
        };

        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await response.json();
            setSuccess('Registration successful! Please check your email to verify your account.');
            setFullName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                    <img
                        alt="SlothUI logo"
                        className="w-12 h-12 rounded-full mr-2"
                        height="48"
                        src="https://storage.googleapis.com/a1aa/image/00VfLlcQWN3VVShHEfCDeZAgho6QFvVe6vYw7IRpB17H8XjPB.jpg"
                        width="48"
                    />
                    <span className="text-2xl font-bold text-indigo-600">slothui</span>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <InputField
                        label="Full Name"
                        type="text"
                        id="full-name"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <InputField
                        label="Username"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputField
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" type="submit">
                        Register
                    </button>
                </form>
                <div className="text-center mt-6">
                    < p className="text-gray-700">
                        Already have an account? <a className="text-indigo-600 hover:underline" href="#">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}