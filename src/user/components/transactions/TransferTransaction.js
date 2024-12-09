export default function TransferTransaction() {

    return (
        <div class="max-w-7xl mx-auto p-4">
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">Transfer Money</h2>
                <div class="mt-4">
                    <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="recipient" placeholder="Recipient" type="text" />
                    <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="amount" placeholder="Amount" type="number" />
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow w-full" onclick="transferMoney()">
                        Transfer
                    </button>
                </div>
            </div>
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">QR Code Payment</h2>
                <div class="mt-4 flex space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow w-full" onclick="generateQRCode()">
                        Generate QR Code
                    </button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow w-full" onclick="scanQRCode()">
                        Scan QR Code
                    </button>
                </div>
                <div class="mt-4" id="qr-code-container">
                </div>
            </div>
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">Users Transferred Money To</h2>
                <div class="mt-4 overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">Account Name</th>
                                <th class="py-2 px-4 border-b">Account Number</th>
                                <th class="py-2 px-4 border-b">Email</th>
                            </tr>
                        </thead>
                        <tbody id="user-list">
                            <tr>
                                <td class="py-2 px-4 border-b">Jane Doe</td>
                                <td class="py-2 px-4 border-b">123456789</td>
                                <td class="py-2 px-4 border-b">jane.doe@example.com</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">John Smith</td>
                                <td class="py-2 px-4 border-b">987654321</td>
                                <td class="py-2 px-4 border-b">john.smith@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}