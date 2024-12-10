import Categories from "../components/categories/Categories";

export default function Profile() {
  return (
    <div class="bg-gray-100 font-sans">
         <Categories></Categories>
      <div class="max-w-7xl mx-auto p-4">
        <div class="mt-8 bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold text-blue-600">Profile Information</h2>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-100 rounded-lg shadow p-4">
              <h3 class="text-xl font-semibold text-gray-700">
                Personal Information
              </h3>
              <div class="mt-4">
                <p class="text-gray-700">
                  <strong>Name:</strong> John Laboune
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Email:</strong> john.laboune@example.com
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Phone:</strong> +44 123 456 789
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Address:</strong> 123 Main St, London, UK
                </p>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow p-4">
              <h3 class="text-xl font-semibold text-gray-700">
                Bank Information
              </h3>
              <div class="mt-4">
                <p class="text-gray-700">
                  <strong>Bank Name:</strong> Example Bank
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Account Number:</strong> 12345678
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>Sort Code:</strong> 12-34-56
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>IBAN:</strong> GB12EXAMPLE1234567890
                </p>
                <p class="text-gray-700 mt-2">
                  <strong>BIC:</strong> EXAMPGB2L
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
