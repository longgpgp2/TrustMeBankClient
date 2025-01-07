import RowActions from "../../shared/RowActions"
export default function SavingsTableRow({ saving }) {
    console.log(saving)
    return (
        <tr>
            <td class="py-2 px-4 border-b">{saving.id}</td>
            <td class="py-2 px-4 border-b">{saving.saverAccountName}</td>
            <td class="py-2 px-4 border-b">{saving.name}</td>
            <td class="py-2 px-4 border-b">{saving.type}</td>
            <td class="py-2 px-4 border-b">{saving.amount}</td>
            <td class="py-2 px-4 border-b">{saving.interestRate}</td>
            <td class="py-2 px-4 border-b">{saving.createdAt}</td>
            <td class="py-2 px-4 border-b">{saving.startDate}</td>
            <td class="py-2 px-4 border-b">{saving.endDate}</td>
            <td class="py-2 px-4 border-b text-red-600">{saving.status}</td>

            <RowActions></RowActions>
        </tr>
    )
}