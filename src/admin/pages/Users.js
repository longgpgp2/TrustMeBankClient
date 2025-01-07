import { useEffect, useState } from "react";
import Categories from "../components/categories/Categories";
import SearchBar from "../components/shared/SearchBar";
import Sort from "../components/users/Sort";
import UserTable from "../components/users/table/UserTable";
import HTTP from "../services/HTTP";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Manage Users - Admin Panel";

    HTTP.get("/users").then((res) => {
      setUsers(res.data.result);
    }).catch((error) => {
      setError(error);
    });

  }, []);
  return (
    <div class="bg-gray-100 font-sans">
      <Categories></Categories>
      <main class="flex-grow p-4">
        {
          error ?
            <h2 class="text-2xl font-bold text-red-600">Network Error</h2>
            :
            (<div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-2xl font-bold text-blue-600">Manage Users</h2>
              <div class="mt-4 flex justify-between items-center">
                <SearchBar onChange={""} onClick={""}></SearchBar>
                <Sort onchange={""}></Sort>
              </div>
              <UserTable users={users}></UserTable>
            </div>)}
      </main>
    </div>
  );
}
