import React, { useState } from 'react';
import api from '../../api/apiConfig';
import HaveAccount from '../components/login/HaveAccount';
import InputField from '../components/login/InputField';
import UpperContainer from '../components/login/UpperContainer';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchUserData = async () => {
        try {
            const response = await api.get('http://localhost:8080/auth/info');
            console.log('Protected data:', response.data);
            window.localStorage.setItem("username", response.data.result.username);
            window.localStorage.setItem("name", response.data.result.fullName);
            window.localStorage.setItem("role", response.data.result.role);
            const role = localStorage.getItem("role");
            if (role.includes("ADMIN")) window.location.href = '/admin';
            else
                window.location.href = '/';
        } catch (error) {
            console.error('Failed to fetch protected data:', error.response?.data || error.message);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await api.post('http://localhost:8080/auth/login', {
                username,
                password,
            });
            window.localStorage.setItem("login", true);
            fetchUserData();
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
                <UpperContainer>Login To Your Account</UpperContainer>
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
                <button
                    className={`w-full bg-green-600 text-white px-4 py-2 mt-6 rounded hover:bg-green-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => {
                        for (let i = 0; i < localStorage.length; i++) {
                            const key = localStorage.key(i);
                            const value = localStorage.getItem(key);
                            console.log(key, value);
                        }

                    }}>Log storage (for testing purpose)</button>
                <button
                    className={`w-full bg-red-600 text-white px-4 py-2 mt-6 rounded hover:bg-red-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => {
                        localStorage.clear()
                        console.log('Storage cleared')
                    }}>Clear storage (for testing purpose)</button>
                <HaveAccount isLogin />
            </div>
        </div>
    );
}