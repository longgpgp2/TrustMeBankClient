export default function CategoriesItem({ children, navigateTo, icon, focused }) {
    return (
        <button class={`bg-${focused ? "blue" : "gray"}-500 text-${focused ? "white" : "gray"} px-4 py-2 rounded-lg shadow flex items-center`}>
            <i class={`fas ${icon} mr-2`}></i>{children}
        </button>
    )
}