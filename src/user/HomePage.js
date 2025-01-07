import Categories from "./components/categories/Categories";
import EditProfile from "./components/profile/EditProfile";
export default function HomePage() {
  return (
    <div class="bg-gray-100 font-sans">
      {/* Header */}
      <Categories></Categories>
      {/* Account => Transfer */}
      {/* Transfer => Transaction */}
      {/* Cards => Cards */}
      {/* Profile => Profile */}
      <EditProfile></EditProfile>
    </div>
  );
}
