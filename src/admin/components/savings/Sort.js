export default function Sort({ onChange }) {
    return (
        <div>
            <label class="text-gray-700" for="sort">Sort by:</label>
            <select class="p-2 border rounded-lg shadow-inner" id="sort" onChange={onChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="status">Status</option>
            </select>
        </div>
    )
}