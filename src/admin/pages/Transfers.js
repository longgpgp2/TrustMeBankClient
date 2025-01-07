import { useEffect, useState } from "react"
import Categories from "../components/categories/Categories"
import SearchBar from "../components/shared/SearchBar"
import Sort from "../components/transfers/Sort"
import TransfersTable from "../components/transfers/table/TransfersTable"
import HTTP from "../services/HTTP"
export default function Transfers() {
    const [transfers, setTransfers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        document.title = "Manage Transfers - Admin Panel";

        HTTP.get("/transfers").then((res) => {
            setTransfers(res.data.result);
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
                        <h2 class="text-2xl font-bold text-blue-600">Manage Transfers</h2>
                        <div class="mt-4 flex justify-between items-center">
                            <SearchBar onChange={""} onClick={""}></SearchBar>
                            <Sort onChange=""></Sort>
                        </div>
                        <TransfersTable transfers={transfers}></TransfersTable>
                    </div>)}
            </main>
        </div>
    )
}
