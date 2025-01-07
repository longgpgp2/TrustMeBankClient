import { Link } from "react-router";

export default function HaveAccount({ isLogin }) {
    return (
        <div className="text-center mt-6">
            <p className="text-gray-700">{isLogin ? "Don't have an account?" : "Already have an account?"} <Link className="text-indigo-600 hover:underline" to={isLogin ? "/register?" : "/login"}>{isLogin ? "Sign up" : "Login"}</Link></p>
        </div>
    );
}