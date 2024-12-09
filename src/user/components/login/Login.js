import axios from 'axios';
import React, { useState } from 'react';
import InputField from './InputField';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password,
            });
            console.log(response.data)
            const token = response.data.result;
            localStorage.setItem('jwtToken', token);
            console.log('Login successful, token:', token);
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
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
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <InputField
                        label="Username"
                        type="username"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                className="mr-2"
                                id="remember"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label className="text-gray-700" htmlFor="remember">Remember me</label>
                        </div>
                        <a className="text-indigo-600 hover:underline" href="#">Forgot password?</a>
                    </div>
                    <button
                        className={`w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-700">Don't have an account? <a className="text-indigo-600 hover:underline" href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}