export default function PaymentHistoryFilter() {
    return (
        <div class="mt-4 flex space-x-4">
            <input class="p-2 border rounded-lg shadow-inner" id="start-date" placeholder="Start Date" type="date" />
            <input class="p-2 border rounded-lg shadow-inner" id="end-date" placeholder="End Date" type="date" />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow" onclick="filterPayments()">
                Filter
            </button>
        </div>
    )
}