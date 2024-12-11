export default function AdminActionHistory(){
    return (
<div class="lg:col-span-3 bg-white rounded-lg shadow p-6">
                    <h2 class="text-2xl font-bold text-blue-600">Admin Actions History</h2>
                    <div class="mt-4 overflow-x-auto">
                        <table class="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th class="py-2 px-4 border-b">Date</th>
                                    <th class="py-2 px-4 border-b">Action</th>
                                    <th class="py-2 px-4 border-b">Details</th>
                                    <th class="py-2 px-4 border-b">Admin</th>
                                </tr>
                            </thead>
                            <tbody id="action-history">
                                {/* <!-- Action history items will appear here --> */}
                                <tr>
                                    <td class="py-2 px-4 border-b">2023-10-01</td>
                                    <td class="py-2 px-4 border-b">Created User</td>
                                    <td class="py-2 px-4 border-b">John Doe (john.doe@example.com)</td>
                                    <td class="py-2 px-4 border-b">Admin1</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b">2023-10-02</td>
                                    <td class="py-2 px-4 border-b">Updated User</td>
                                    <td class="py-2 px-4 border-b">Jane Smith (jane.smith@example.com)</td>
                                    <td class="py-2 px-4 border-b">Admin2</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b">2023-10-03</td>
                                    <td class="py-2 px-4 border-b">Deleted User</td>
                                    <td class="py-2 px-4 border-b">John Doe (john.doe@example.com)</td>
                                    <td class="py-2 px-4 border-b">Admin1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

