import Categories from "../components/categories/Categories";
export default function Users() {
  return (
    <div class="bg-gray-100 font-sans">
      {/* Header */}
      <Categories></Categories>
      <main class="flex-grow p-4">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold text-blue-600">Manage Users</h2>
          <div class="mt-4 flex justify-between items-center">
            <div class="flex space-x-4">
              <input
                class="p-2 border rounded-lg shadow-inner"
                id="search"
                placeholder="Search users..."
                type="text"
              />
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
                onclick="searchUsers()"
              >
                Search
              </button>
            </div>
            <div>
              <label class="text-gray-700" for="sort">
                Sort by:
              </label>
              <select
                class="p-2 border rounded-lg shadow-inner"
                id="sort"
                onchange="sortUsers()"
              >
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="role">Role</option>
              </select>
            </div>
          </div>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b">Name</th>
                  <th class="py-2 px-4 border-b">Email</th>
                  <th class="py-2 px-4 border-b">Role</th>
                  <th class="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody id="user-list">
                {/* <!-- User list items will appear here --> */}
                <tr>
                  <td class="py-2 px-4 border-b">John Doe</td>
                  <td class="py-2 px-4 border-b">john.doe@example.com</td>
                  <td class="py-2 px-4 border-b">User</td>
                  <td class="py-2 px-4 border-b">
                    <button class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">
                      Edit
                    </button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Jane Smith</td>
                  <td class="py-2 px-4 border-b">jane.smith@example.com</td>
                  <td class="py-2 px-4 border-b">Admin</td>
                  <td class="py-2 px-4 border-b">
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
  );
}
