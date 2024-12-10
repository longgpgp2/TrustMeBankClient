import './App.css';
import HomePage from './user/HomePage';
import Home from './user/pages/Home';
import About from './user/pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Profile from './user/pages/Profile';
import Cards from './user/pages/Cards';
import Account from './user/pages/Account';
import Transaction from './user/pages/Transactions';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
function App() {
  return (
    <div className="App">
      {/* for user : Home page */}
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="accounts" element={<Account />} />
        <Route path="transactions" element={<Transaction/>} />
        <Route path="cards" element={<Cards />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* for admin: Admin Panel */}
    </div>
  );
}

export default App;
