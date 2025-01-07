import Categories from "../components/categories/Categories";
import AdminActionHistory from "../components/dashboard/AdminActionsHistory";
import Statistics from "../components/dashboard/Statistics";
import UpperContainer from "../components/dashboard/UpperContainer";
export default function Dashboard() {
    const name = localStorage.getItem("name");
    return (

        <div class="bg-gray-100 font-sans">
            {/* Header */}
            <Categories></Categories>
            <main class="flex-grow p-4">
                <div class="mt-8">
                    <h1 class="text-4xl font-bold text-blue-600">Welcome {name ? name : "Admin"}</h1>
                </div>

                <UpperContainer></UpperContainer>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* <!-- Statistics --> */}
                    <Statistics></Statistics>
                    {/* <!-- Admin Actions History --> */}
                    <AdminActionHistory></AdminActionHistory>
                </div>
            </main>

        </div>


    );
}