import Categories from "./components/categories/Categories";
import Dashboard from "./pages/Dashboard";

export default function AdminPanel() {
    return (
        <div class="bg-gray-100 font-sans">
            {/* Header */}
            <Categories></Categories>
            <main class="flex-grow p-4">
                <Dashboard></Dashboard>
            </main>

        </div>
    )
}
