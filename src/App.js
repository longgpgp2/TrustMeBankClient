import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminCards from './admin/pages/Cards';
import Dashboard from './admin/pages/Dashboard';
import Loans from './admin/pages/Loans';
import Savings from './admin/pages/Savings';
import Settings from './admin/pages/Settings';
import Transfers from './admin/pages/Transfers';
import Users from './admin/pages/Users';
import './App.css';
import HomePage from './user/HomePage';
import Account from './user/pages/Account';
import Cards from './user/pages/Cards';
import Login from './user/pages/Login';
import Profile from './user/pages/Profile';
import Register from './user/pages/Register';
import Transaction from './user/pages/Transactions';
function App() {
  return (
    <div className="App">
      {/* for user : Home page */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="accounts" element={<Account />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="cards" element={<Cards />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* for admin */}
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/transfers" element={<Transfers />} />
          <Route path="admin/savings" element={<Savings />} />
          <Route path="admin/loans" element={<Loans />} />
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
