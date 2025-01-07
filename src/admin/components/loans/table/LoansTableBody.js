import LoansTableRow from "./LoansTableRow";

export default function LoansTableBody({ loans }) {
    return (
        <tbody id="loan-list">
            {
                loans.map((loan, id) => {
                    return (<LoansTableRow loan={loan}></LoansTableRow>)
                })
            }
        </tbody>
    )
}