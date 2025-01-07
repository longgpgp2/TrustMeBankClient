import UserTableBody from "./UserTableBody";
import UserTableHead from "./UserTableHead";

export default function UserTable({ users }) {
    return (
        <div class="mt-4 overflow-x-auto">
            <table class="min-w-full bg-white">
                <UserTableHead></UserTableHead>
                <UserTableBody users={users}></UserTableBody>
            </table>
        </div>
    )
}