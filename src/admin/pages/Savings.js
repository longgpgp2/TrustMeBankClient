import { useEffect, useState } from "react"
import Categories from "../components/categories/Categories"
import Sort from "../components/savings/Sort"
import SavingsTable from "../components/savings/table/SavingsTable"
import SearchBar from "../components/shared/SearchBar"
import HTTP from "../services/HTTP"
export default function Savings() {
    const [savings, setSavings] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        document.title = "Manage Savings - Admin Panel";

        HTTP.get("/savings").then((res) => {
            setSavings(res.data.result);
        }).catch((error) => {
            setError(error);
        });

    }, []);
    return (
        <div class="bg-gray-100 font-sans">
            <Categories></Categories>
            <main class="flex-grow p-4">
                {error ?
                    <h2 class="text-2xl font-bold text-red-600">Network Error</h2>
                    :
                    (<div class="bg-white rounded-lg shadow p-6">
                        <h2 class="text-2xl font-bold text-blue-600">Manage Savings</h2>
                        <div class="mt-4 flex justify-between items-center">
                            <SearchBar onChange={""} onClick={""}></SearchBar>
                            <Sort onChange=""></Sort>
                        </div>
                        <SavingsTable savings={savings}></SavingsTable>
                    </div>)}
            </main>
        </div>
    )
}
