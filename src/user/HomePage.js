import PaymentHistory from "./components/accounts/PaymentHistory";
import Cards from "./components/cards/Cards";
import Categories from "./components/categories/Categories";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import EditProfile from "./components/profile/EditProfile";
import Profile from "./components/profile/Profile";
import TransferTransaction from "./components/transactions/TransferTransaction";
export default function HomePage() {
    return (
        <div class="bg-gray-100 font-sans">
            <Categories></Categories>
            <PaymentHistory></PaymentHistory>
            <TransferTransaction></TransferTransaction>
            <Cards></Cards>
            <Profile></Profile>
            <EditProfile></EditProfile>
            <Register></Register>
            <Login></Login>
        </div>

    )
}