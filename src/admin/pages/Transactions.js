import Categories from "../components/categories/Categories"
export default function Transactions(){
    return (
        <div class="bg-gray-100 font-sans">
        {/* Header */}
        <Categories></Categories>
        <main class="flex-grow p-4">
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">Manage Transactions</h2>
                <div class="mt-4 flex justify-between items-center">
                    <div class="flex space-x-4">
                        <input class="p-2 border rounded-lg shadow-inner" id="search"
                            placeholder="Search transactions..." type="text" />
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
                            onclick="searchTransactions()">
                            Search
                        </button>
                    </div>
                    <div>
                        <label class="text-gray-700" for="sort">Sort by:</label>
                        <select class="p-2 border rounded-lg shadow-inner" id="sort" onchange="sortTransactions()">
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                            <option value="status">Status</option>
                        </select>
                    </div>
                </div>
                <div class="mt-4 overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Date</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Description</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Amount</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Status</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Sender</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Receiver</th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="transaction-list">
                            {/* <!-- Transaction list items will appear here --> */}
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">2023-10-01</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Grocery Shopping</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">£50.00</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Completed</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">John Doe</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Jane Smith</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">Edit</button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">2023-10-02</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Electricity Bill</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">£30.00</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Completed</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Jane Smith</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">John Doe</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">Edit</button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">2023-10-03</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Internet Bill</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">£25.00</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Pending</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">John Doe</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">Jane Smith</td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">Edit</button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
      </div>
    )
}
