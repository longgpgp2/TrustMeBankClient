import RowActions from "../../shared/RowActions"
export default function TransfersTableRow({ transfer }) {
    console.log(transfer)
    return (
        <tr>
            <td class="py-2 px-4 border-b">{transfer.id}</td>
            <td class="py-2 px-4 border-b">{transfer.senderName}</td>
            <td class="py-2 px-4 border-b">{transfer.receiverName}</td>
            <td class="py-2 px-4 border-b">{transfer.amount}</td>
            <td class="py-2 px-4 border-b">{transfer.description}</td>
            <td class="py-2 px-4 border-b">{transfer.timeStamp}</td>
            <td class="py-2 px-4 border-b text-green-600">{transfer.transferStatus}</td>

            <RowActions></RowActions>
        </tr>
    )
}