import Categories from "../components/categories/Categories"
export default function Cards(){
    return (
        <div class="bg-gray-100 font-sans">
        {/* Header */}
        <Categories></Categories>
        <main class="flex-grow p-4">
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">
                    Manage User Cards
                </h2>
                <div class="mt-4 flex justify-between items-center">
                    <div class="flex space-x-4">
                        <input class="p-2 border rounded-lg shadow-inner" id="search" placeholder="Search cards..."
                            type="text" />
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow" onclick="searchCards()">
                            Search
                        </button>
                    </div>
                    <div>
                        <label class="text-gray-700" for="sort">
                            Sort by:
                        </label>
                        <select class="p-2 border rounded-lg shadow-inner" id="sort" onchange="sortCards()">
                            <option value="name">
                                Name
                            </option>
                            <option value="cardNumber">
                                Card Number
                            </option>
                            <option value="expiryDate">
                                Expiry Date
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mt-4 overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b max-w-xs truncate">
                                    Name
                                </th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">
                                    Card Number
                                </th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">
                                    Expiry Date
                                </th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">
                                    Card Type
                                </th>
                                <th class="py-2 px-4 border-b max-w-xs truncate">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="card-list">
                            {/* <!-- Card list items will appear here --> */}
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    John Doe
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    **** **** **** 1234
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    12/24
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    Visa
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">
                                        Edit
                                    </button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    Jane Smith
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    **** **** **** 5678
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    11/23
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    MasterCard
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">
                                        Edit
                                    </button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    John Doe
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    **** **** **** 9012
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    10/25
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    American Express
                                </td>
                                <td class="py-2 px-4 border-b max-w-xs truncate">
                                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">
                                        Edit
                                    </button>
                                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">
                                        Delete
                                    </button>
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
