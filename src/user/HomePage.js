import PaymentHistory from "./components/accounts/PaymentHistory";
import Cards from "./components/cards/Cards";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import EditProfile from "./components/profile/EditProfile";
import Categories from "./components/categories/Categories";
import TransferTransaction from "./components/transactions/TransferTransaction";
import { NavLink } from "react-router";
export default function HomePage() {
  return (
    <div class="bg-gray-100 font-sans">
      {/* Header */}
      <Categories></Categories>
      {/* Account => Transfer */}
      {/* Transfer => Transaction */}
      {/* Cards => Cards */}
      {/* Profile => Profile */}
      <EditProfile></EditProfile>
    </div>
  );
}
