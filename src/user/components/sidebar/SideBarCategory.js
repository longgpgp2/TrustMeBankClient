export default function SideBarCategory({ children, notifications, navigateTo }) {
    return (
        <a class="flex items-center p-2 rounded hover:bg-indigo-500" href={navigateTo}>
            <i class="fas fa-home mr-2">
            </i>
            {children}
            <span class="ml-auto bg-indigo-800 text-xs rounded-full px-2 py-1">
                {notifications}
            </span>
        </a>
    )
}