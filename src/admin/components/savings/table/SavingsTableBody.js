import SavingsTableRow from "./SavingsTableRow";

export default function SavingsTableBody({ savings }) {
    return (
        <tbody id="saving-list">
            {
                savings.map((saving, id) => {
                    return (<SavingsTableRow saving={saving}></SavingsTableRow>)
                })
            }
        </tbody>
    )
}