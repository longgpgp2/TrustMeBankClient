import RowActions from "../../shared/RowActions"
export default function LoansTableRow({ loan }) {
    console.log(loan)
    return (
        <tr>
            <td class="py-2 px-4 border-b">{loan.id}</td>
            <td class="py-2 px-4 border-b">{loan.borrowerAccountName}</td>
            <td class="py-2 px-4 border-b">{loan.createdAt}</td>
            <td class="py-2 px-4 border-b">{loan.amount}</td>
            <td class="py-2 px-4 border-b">{loan.interestRate}</td>
            <td class="py-2 px-4 border-b">{loan.endDate}</td>
            <td class="py-2 px-4 border-b text-red-600">{loan.status}</td>

            <RowActions></RowActions>
        </tr>
    )
}