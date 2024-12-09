import PaymentHistoryFilter from "./PaymentHistoryFilter";
import PaymentHistoryTable from "./PaymentHistoryTable";

export default function PaymentHistory() {
    return (
        <div class="max-w-7xl mx-auto p-4">
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">
                    Payment History
                </h2>
                <PaymentHistoryFilter></PaymentHistoryFilter>
                <PaymentHistoryTable></PaymentHistoryTable>
            </div>
        </div>
    )
}