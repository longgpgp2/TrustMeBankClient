import UserTableRow from "./UserTableRow";

export default function UserTableBody({ users }) {

    return (
        <tbody id="user-list">
            {
                users.map((user, id) => {
                    return (<UserTableRow user={user}></UserTableRow>)
                })
            }
        </tbody>
    )
}