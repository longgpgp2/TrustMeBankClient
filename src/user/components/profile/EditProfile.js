export default function EditProfile() {
    return (
        <div class="max-w-7xl mx-auto p-4">

            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">
                    Profile Information
                </h2>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-100 rounded-lg shadow p-4">
                        <h3 class="text-xl font-semibold text-gray-700">
                            Personal Information
                        </h3>
                        <div class="mt-4">
                            <label class="block text-gray-700">
                                Name:
                            </label>
                            <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="name" type="text" value="John Laboune" />
                            <label class="block text-gray-700">
                                Email:
                            </label>
                            <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="email" type="email" value="john.laboune@example.com" />
                            <label class="block text-gray-700">
                                Phone:
                            </label>
                            <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="phone" type="text" value="+44 123 456 789" />
                            <label class="block text-gray-700">
                                Address:
                            </label>
                            <input class="p-2 border rounded-lg shadow-inner w-full mb-4" id="address" type="text" value="123 Main St, London, UK" />
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow w-full" onclick="savePersonalInfo()">
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="bg-gray-100 rounded-lg shadow p-4">
                        <h3 class="text-xl font-semibold text-gray-700">
                            Bank Information
                        </h3>
                        <div class="mt-4">
                            <p class="text-gray-700">
                                <strong>
                                    Bank Name:
                                </strong>
                                Example Bank
                            </p>
                            <p class="text-gray-700 mt-2">
                                <strong>
                                    Account Number:
                                </strong>
                                12345678
                            </p>
                            <p class="text-gray-700 mt-2">
                                <strong>
                                    Sort Code:
                                </strong>
                                12-34-56
                            </p>
                            <p class="text-gray-700 mt-2">
                                <strong>
                                    IBAN:
                                </strong>
                                GB12EXAMPLE1234567890
                            </p>
                            <p class="text-gray-700 mt-2">
                                <strong>
                                    BIC:
                                </strong>
                                EXAMPGB2L
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}