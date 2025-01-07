export default function RowActions({ deleteAction, editAction }) {
    return (
        <td class="py-2 px-4 border-b space-x-2">
            <button onClick={editAction} class="bg-blue-500 text-white px-2 py-1 rounded-lg shadow">
                Edit
            </button>
            <button onClick={deleteAction} class="bg-red-500 text-white px-2 py-1 rounded-lg shadow">
                Delete
            </button>
        </td>
    )
}