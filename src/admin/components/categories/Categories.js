import { Link, NavLink } from "react-router";
import CategoriesItem from "./CategoriesItem";
export default function Categories() {
  const name = localStorage.getItem("name");

  return (
    // <div>
    <div class="max-w-7xl mx-auto p-4">
      <div class="grid grid-rows-2 shadow bg-white py-4 rounded-lg gap-y-2">
        <div class="flex rounded-t-lg items-center px-5 justify-between border-b-0">
          <div class=" flex items-center">
            <img
              alt="User avatar"
              class="rounded-full w-12 h-12"
              src="https://placehold.co/50x50"
            />
            <span class="ml-4 text-gray-700 font-semibold">{name ? name : "Admin"}</span>
          </div>
          <Link class="text-blue-500 font-semibold" to="/logout">
            Logout
          </Link>
        </div>
        <div class="flex rounded-b-lg overflow-x-auto border-t-0 px-5">
          <nav class="flex space-x-4 min-w-max items-center justify-center">
            <NavLink to="/admin" end>
              <CategoriesItem focused={true} icon="fa-tachometer">
                Dashboard
              </CategoriesItem>
            </NavLink>
            <NavLink to="/admin/users" end>
              <CategoriesItem focused={false} icon="fa-university">
                Users
              </CategoriesItem>
            </NavLink>
            <NavLink to="/admin/transfers" end>
              <CategoriesItem focused={false} icon="fa-exchange-alt">
                Transfers
              </CategoriesItem>
            </NavLink>
            <NavLink to="/admin/loans" end>
              <CategoriesItem focused={false} icon="fa-wallet">
                Loans
              </CategoriesItem>
            </NavLink>
            <NavLink to="/admin/savings" end>
              <CategoriesItem focused={false} icon="fa-piggy-bank">
                Savings
              </CategoriesItem>
            </NavLink>
            <NavLink to="/admin/settings" end>
              <CategoriesItem focused={false} icon="fa-cogs">
                Settings
              </CategoriesItem>
            </NavLink>
          </nav>
        </div>
      </div>


    </div>
    // </div>
  );
}
