export default function Sort({ onChange }) {
    return (
        <div>
            <label class="text-gray-700" for="sort">
                Sort by:
            </label>
            <select
                class="p-2 border rounded-lg shadow-inner"
                id="sort"
                onChange={onChange}
            >
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="role">Role</option>
            </select>
        </div>
    )
}