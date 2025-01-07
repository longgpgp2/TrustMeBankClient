export default function Chat() {
    return (
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold text-blue-600">Chat with ChatGPT</h2>
            <div class="mt-4">
                <div
                    class="bg-gray-100 p-4 rounded-lg shadow-inner h-64 overflow-y-auto"
                    id="chat-box"
                ></div>
                <div class="mt-4 flex">
                    <input
                        class="flex-grow p-2 border rounded-lg shadow-inner"
                        id="chat-input"
                        placeholder="Type your message..."
                        type="text"
                    />
                    <button
                        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow ml-2"
                        onclick="sendMessage()"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}