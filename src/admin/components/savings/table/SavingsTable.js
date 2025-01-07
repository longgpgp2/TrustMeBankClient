import SavingsTableBody from "./SavingsTableBody"
import SavingsTableHead from "./SavingsTableHead"

export default function SavingsTable({ savings }) {
    return (
        <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
                <SavingsTableHead></SavingsTableHead>
                <SavingsTableBody savings={savings}></SavingsTableBody>
            </table>
        </div>
    )
}