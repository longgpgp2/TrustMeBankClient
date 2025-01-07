export default function SearchBar({ onClick, onChange }) {
    return (
        <div class="flex space-x-4">
            <input
                class="p-2 border rounded-lg shadow-inner"
                id="search"
                placeholder="Search..."
                type="text"
            />
            <button
                class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
                onClick={onClick}
            >
                Search
            </button>
        </div>
    )
}