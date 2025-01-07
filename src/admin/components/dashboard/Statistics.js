export default function Statistics(){
    return (
        <div class="lg:col-span-3 bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold text-blue-600">Statistics</h2>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <!-- Total Users --> */}
            <div class="bg-blue-500 text-white rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold">Total Users</h3>
                <p class="text-2xl mt-2">1,234</p>
            </div>
            {/* <!-- Total Transactions --> */}
            <div class="bg-green-500 text-white rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold">Total Transactions</h3>
                <p class="text-2xl mt-2">5,678</p>
            </div>
            {/* <!-- Total Cards --> */}
            <div class="bg-red-500 text-white rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold">Total Cards</h3>
                <p class="text-2xl mt-2">789</p>
            </div>
        </div>
    </div>
    )
}