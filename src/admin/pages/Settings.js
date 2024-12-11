import Categories from "../components/categories/Categories"
export default function Settings(){
    return (
        <div class="bg-gray-100 font-sans">
        {/* Header */}
        <Categories></Categories>
        <main class="flex-grow p-4">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
               setting
            </div>
        </main>
      </div>
    )
}
