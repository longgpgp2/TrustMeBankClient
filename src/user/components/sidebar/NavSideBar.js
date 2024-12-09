import AppLogoBar from "./AppLogoBar";
import SearchBar from "./SearchBar";
import SideBarCategory from "./SideBarCategory";
import UserInfoBar from "./UserInfoBar";

export default function NavSideBar() {
    return (
        <div class="bg-indigo-600 text-white w-64 p-4 flex flex-col">
            <AppLogoBar></AppLogoBar>
            <div class="flex-1">
                <SearchBar></SearchBar>
                <nav class="space-y-2">
                    <SideBarCategory notifications={10}>Feeds</SideBarCategory>
                    <SideBarCategory notifications={10}>Friends</SideBarCategory>
                    <SideBarCategory notifications={10}>Settings</SideBarCategory>
                </nav>
            </div>
            <UserInfoBar></UserInfoBar>
        </div>
    )
}