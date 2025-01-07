import LoansTableBody from "./LoansTableBody"
import LoansTableHead from "./LoansTableHead"

export default function LoansTable({ loans }) {
    return (
        <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
                <LoansTableHead></LoansTableHead>
                <LoansTableBody loans={loans}></LoansTableBody>
            </table>
        </div>
    )
}