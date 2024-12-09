export default function UserInfoBar({ fullname, username, avatar }) {
    return (
        <div class="mt-4 flex items-center">
            <img alt="User profile picture" class="w-10 h-10 rounded-full mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/HAH4jJ3UkopwMR4efoEp1y0ToT3E3CY4aRGrg9rJvjAMfrxnA.jpg" width="40" />
            <div>
                <div class="font-bold">
                    {fullname ? fullname : "Guest"}
                </div>
                <div class="text-sm">
                    {username ? username : "Guest"}
                </div>
            </div>
        </div>
    )
}