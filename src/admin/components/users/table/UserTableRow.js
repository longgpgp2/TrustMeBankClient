import RowActions from "../../shared/RowActions";

export default function UserTableRow({ user, key }) {
    return (
        <tr>
            <td class="py-2 px-4 border-b">{user.id}</td>
            <td class="py-2 px-4 border-b">{user.accountName}</td>
            <td class="py-2 px-4 border-b">{user.fullName}</td>
            <td class="py-2 px-4 border-b">{user.balance}</td>
            <td class="py-2 px-4 border-b">{user.email}</td>
            <td class="py-2 px-4 border-b">{user.phone}</td>
            <td class="py-2 px-4 border-b">{user.createdAt}</td>
            <td class="py-2 px-4 border-b">{user.role[0]}</td>
            <RowActions></RowActions>
        </tr>
    )
}