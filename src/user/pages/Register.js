import axios from 'axios';
import React, { useState } from 'react';
import HaveAccount from '../components/login/HaveAccount';
import InputField from '../components/login/InputField';
import UpperContainer from '../components/login/UpperContainer';
export default function Register() {
    const [fullName, setFullName] = useState('');
    const [accountName, setAccountName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setSuccess('');

        const registrationData = {
            fullName,
            accountName,
            username,
            email,
            phone,
            password,
            pinCode,
        };

        axios.post('http://localhost:8080/auth/register', registrationData)
            .then(response => {
                const data = response.data;
                console.log(data);
                if (data.success) {
                    setSuccess('Registration successful! Please check your email to verify your account.');
                    setFullName('');
                    setAccountName('');
                    setUsername('');
                    setEmail('');
                    setPhone('');
                    setPassword('');
                    setConfirmPassword('');
                    setPinCode('');
                } else {
                    throw new Error(data.message || 'Registration failed');
                }
            })
            .catch(err => {
                setError(err.response?.data?.message || err.message || 'An error occurred');
            });
    };


    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
                <UpperContainer>Create Your Account</UpperContainer>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {error && <p className="col-span-2 text-red-500 text-center">{error}</p>}
                    {success && <p className="col-span-2 text-green-500 text-center">{success}</p>}

                    <InputField
                        required={true}
                        label="Full Name"
                        type="text"
                        id="full-name"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Account Name"
                        type="text"
                        id="account-name"
                        placeholder="Enter your account name"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Username"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Phone"
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputField
                        required={true}
                        label="Pin Code"
                        type="text"
                        id="pin-code"
                        placeholder="Enter a 4-digit pin code"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                    <div className="col-span-2">
                        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" type="submit">
                            Register
                        </button>
                    </div>
                </form>
                <HaveAccount HaveAccount={false} />
            </div>
        </div>
    );
}
