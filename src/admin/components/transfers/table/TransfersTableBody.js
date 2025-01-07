import TransfersTableRow from "./TransfersTableRow";

export default function TransfersTableBody({ transfers }) {
    return (
        <tbody id="transaction-list">
            {
                transfers.map((transfer, id) => {
                    return (<TransfersTableRow transfer={transfer}></TransfersTableRow>)
                })
            }
        </tbody>
    )
}