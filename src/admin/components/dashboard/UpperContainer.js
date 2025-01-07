import Chat from "./Chat"
import Graph from "./Graph"
export default function UpperContainer() {
    return (
        <div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Graph></Graph>
                <Chat></Chat>
            </div>
        </div>
    )
}