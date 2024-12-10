import CategoriesItem from "./CategoriesItem";
import { NavLink } from "react-router";
export default function Categories() {
  return (
    // <div>
      <div class="max-w-7xl mx-auto p-4">
        <div class="grid grid-rows-2 shadow bg-white py-4 rounded-lg gap-y-2">
          <div class="flex rounded-t-lg items-center px-5 justify-between border-b-0">
            <div class=" flex items-center">
              <img
                alt="User avatar"
                class="rounded-full w-12 h-12"
                src="https://placehold.co/50x50"
              />
              <span class="ml-4 text-gray-700 font-semibold">John Laboune</span>
            </div>
            <a class="text-blue-500 font-semibold" href="http://google.com">
              Logout
            </a>
          </div>
          <div class="flex rounded-b-lg overflow-x-auto border-t-0 px-5">
            <nav class="flex space-x-4 min-w-max items-center justify-center">
                <NavLink to="/home" end>
                  <CategoriesItem focused={true} icon="fa-home">
                    HOME
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/accounts" end>
                  <CategoriesItem focused={false} icon="fa-university">
                    ACCOUNTS
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/transactions" end>
                  <CategoriesItem focused={false} icon="fa-exchange-alt">
                    TRANSACTIONS
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/cards" end>
                  <CategoriesItem focused={false} icon="fa-credit-card">
                    CARDS
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/message" end>
                  <CategoriesItem focused={false} icon="fa-envelope">
                    MESSAGES
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/profile" end>
                  <CategoriesItem focused={false} icon="fa-user">
                    PROFILE
                  </CategoriesItem>
                </NavLink>
                <NavLink to="/help" end>
                  <CategoriesItem focused={false} icon="fa-question-circle">
                    HELP
                  </CategoriesItem>
                </NavLink>
              </nav>
          </div>
        </div>

        <div class="mt-8">
          <h1 class="text-4xl font-bold text-blue-600">Welcome John Laboune</h1>
        </div>

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold text-blue-600">
              Income change stats (30 days)
            </h2>
            <p class="text-gray-500">Personal account / GBP/12345678</p>
            <div class="mt-4">
              <img
                alt="Income and expenses graph"
                class="rounded-lg shadow"
                src="https://placehold.co/600x300"
              />
            </div>
          </div>

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
        </div>
      </div>
    // </div>
  );
}
