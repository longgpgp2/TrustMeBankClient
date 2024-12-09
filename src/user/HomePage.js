import Login from "./components/login/Login";
import Register from "./components/login/Register";
import NavSideBar from "./components/sidebar/NavSideBar";

export default function HomePage() {
    return (
        <div class="bg-gray-100">
            <div class="flex h-screen justify-between">
                <NavSideBar></NavSideBar>
                <div class="flex h-screen justify-around w-full">
                    <Login></Login>
                    <Register></Register>
                </div>

            </div>
        </div>

    )
}