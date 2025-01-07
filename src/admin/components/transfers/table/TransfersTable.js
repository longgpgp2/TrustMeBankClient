import TransfersTableBody from "./TransfersTableBody"
import TransfersTableHead from "./TransfersTableHead"

export default function TransfersTable({ transfers }) {
    return (
        <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
                <TransfersTableHead></TransfersTableHead>
                <TransfersTableBody transfers={transfers}></TransfersTableBody>
            </table>
        </div>
    )
}