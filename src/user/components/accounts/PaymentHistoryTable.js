export default function PaymentHistoryTable() {
    return (
        <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b">
                            Date
                        </th>
                        <th class="py-2 px-4 border-b">
                            Description
                        </th>
                        <th class="py-2 px-4 border-b">
                            Amount
                        </th>
                        <th class="py-2 px-4 border-b">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody id="payment-history">
                    <tr>
                        <td class="py-2 px-4 border-b">
                            2023-10-01
                        </td>
                        <td class="py-2 px-4 border-b">
                            Grocery Shopping
                        </td>
                        <td class="py-2 px-4 border-b">
                            £50.00
                        </td>
                        <td class="py-2 px-4 border-b">
                            Completed
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b">
                            2023-10-02
                        </td>
                        <td class="py-2 px-4 border-b">
                            Electricity Bill
                        </td>
                        <td class="py-2 px-4 border-b">
                            £30.00
                        </td>
                        <td class="py-2 px-4 border-b">
                            Completed
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b">
                            2023-10-03
                        </td>
                        <td class="py-2 px-4 border-b">
                            Internet Bill
                        </td>
                        <td class="py-2 px-4 border-b">
                            £25.00
                        </td>
                        <td class="py-2 px-4 border-b">
                            Pending
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}