import './App.css';
import HomePage from './user/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Profile from './user/pages/Profile';
import Cards from './user/pages/Cards';
import Account from './user/pages/Account';
import Transaction from './user/pages/Transactions';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import AdminPanel from './admin/AdminPanel';
import Users from './admin/pages/Users';
import Transactions from './admin/pages/Transactions';
import AdminCards from './admin/pages/Cards';
import Settings from './admin/pages/Settings';
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
        {/* for admin */}
        <Route path="admin" element={<AdminPanel />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/transactions" element={<Transactions />} />
        <Route path="admin/cards" element={<AdminCards />} />
        <Route path="admin/settings" element={<Settings />} />
      </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* for admin: Admin Panel */}
    </div>
  );
}

export default App;
